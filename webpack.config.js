const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
const isProductionEnvironment = process.env.NODE_ENV === 'production';

const getOptimizationConfig = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProductionEnvironment) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config;
};

const getFilename = extension => isDevelopmentEnvironment ? `[name].${extension}` : `[name].[hash].${extension}`;

const getBabelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env',
        ]
    }

    if (preset) {
        options.presets.push(preset);
    }

    return options;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.tsx'],
    },
    output: {
        filename: getFilename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    optimization: getOptimizationConfig(),
    devServer: {
        port: 4200,
        hot: isDevelopmentEnvironment,
    },
    devtool: isDevelopmentEnvironment ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProductionEnvironment,
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: getFilename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevelopmentEnvironment,
                            reloadAll: true,
                        }
                    },
                    'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: getBabelOptions('@babel/preset-typescript'),
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                    {
                        loader: "eslint-loader",
                    }
                ],
            }
        ]
    }
};
