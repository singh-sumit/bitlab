import { Brand } from "@components/Brand/Brand";
import { Layout, Typography, Space, Divider, Avatar, Col, Row } from "antd";
import React from "react";
import wave from '@assets/wave1.svg';
import { NavBar } from "@components/NavBar/NavBar";

const { Content } = Layout;
const { Text } = Typography;

const layoutStyle: React.CSSProperties = {
    height: '100vh',
};

const contentStyle: React.CSSProperties = {
    padding: '0 48px',
    width: '100%',
    backgroundImage: `url(${wave})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

export const Home: React.FC = () => {
    const supportedRuntimes = [
        {
            "name": "Python",
            "imageUrl": "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
        },
        {
            "name": "Node",
            "imageUrl": "https://nodejs.org/static/logos/nodejsStackedDark.svg"
        }
    ]

    return (
        <Layout style={layoutStyle}>
            <NavBar />
            <Content style={contentStyle}>
                <Row
                    style={{ marginTop: "120px" }}
                >
                    <Col flex="1 1 200px">
                        <Text
                            style={{
                                fontSize: "64px",
                                display: "block",
                                width: "85%"
                            }}
                        >
                            Start building your software with <Brand />
                        </Text>
                    </Col>
                    <Col flex="0 1 300px"></Col>
                </Row>
                <Divider />
                <Text style={{ fontWeight: "bolder", fontSize: "18px" }}>
                    Supported runtimes
                </Text>
                <br />
                <Space size="large">
                    {
                        supportedRuntimes.map((runtimeDetail) => (
                            <Avatar src={
                                <img src={runtimeDetail.imageUrl}
                                    alt={runtimeDetail.name}
                                    style={{
                                        objectFit: "contain"
                                    }}
                                />
                            }
                                size={{ xs: 40, sm: 64, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            >
                            </Avatar>
                        ))
                    }
                </Space>
            </Content>
        </Layout>
    );
};