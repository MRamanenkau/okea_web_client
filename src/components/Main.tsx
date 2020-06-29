import * as React from 'react';
import { Carousel, Col, Input, Layout, Menu, Row, Space, Typography } from 'antd';
import { UserOutlined, HeartOutlined, BarcodeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { ProductCard } from './ProductCard';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;
const { SubMenu } = Menu;

export const Main = (): JSX.Element => (
    <>
        <Layout style={{ width: 1400, margin: 'auto', padding: 25 }}>
            <Header style={{ background: 'none', paddingBottom: 30 }}>
                <Row>
                    <Col span={4}>
                        <Title style={{ color: 'blue', padding: 15 }} level={3}>
                            OKEA
                        </Title>
                    </Col>
                    <Col span={16}>
                        <Search
                            placeholder="Ссылка, номер товара, описание или что-то другое"
                            style={{ width: 600 }}
                            size="large"
                        />
                    </Col>
                    <Col style={{ fontSize: 20 }} span={1}>
                        <UserOutlined />
                    </Col>
                    <Col style={{ fontSize: 20 }} span={1}>
                        <HeartOutlined />
                    </Col>
                    <Col style={{ fontSize: 20 }} span={1}>
                        <BarcodeOutlined />
                    </Col>
                    <Col style={{ fontSize: 20 }} span={1}>
                        <ShoppingCartOutlined />
                    </Col>
                </Row>
                <Space />
            </Header>
            <Layout style={{ paddingTop: 30 }}>
                <Sider>
                    <Menu style={{ width: 240 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                        <Menu.Item key="1">Navigation One</Menu.Item>
                        <Menu.Item key="1a">Navigation One</Menu.Item>
                        <Menu.Item key="1w">Navigation One</Menu.Item>
                        <Menu.Item key="1r">Navigation One</Menu.Item>
                        <Menu.Item key="1e">Navigation One</Menu.Item>
                        <Menu.Item key="1t">Navigation One</Menu.Item>
                        <Menu.Item key="1y">Navigation One</Menu.Item>
                        <Menu.Item key="2">Navigation Two</Menu.Item>
                        <SubMenu key="sub1" title="Navigation Two">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                            <SubMenu key="sub1-2" title="Submenu">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub2" title="Navigation Three">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="link">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                Ant Design
                            </a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Carousel style={{ marginLeft: 55 }} autoplay>
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
            <Content style={{ paddingTop: 30 }}>
                <Space>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Space>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </>
);
