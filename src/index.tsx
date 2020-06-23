import * as React from 'react';
import { render } from 'react-dom';
import { Layout, Input, Typography, Space, Carousel } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

render(
    <>
        <Layout>
            <Header style={{ color: 'blue'}}>
                <Space>
                    <Title style={{ color: 'red'}} level={3}>OKEA</Title>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </Space>
            </Header>
            <Layout>
                <Sider>
                    Categories
                </Sider>
                <Content>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Content>
            </Layout>
            <Content>
                Content
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </>,
    document.getElementById('app'),
);