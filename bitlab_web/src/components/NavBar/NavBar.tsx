import { Brand } from "@components/Brand/Brand";
import { Layout, theme, Space, Button, Flex } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

export const NavBar: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Flex align="center" justify="space-between">
                <Brand />
                <Space size="large">
                    <NavLink to="/login">
                        <Button
                            color="default" variant="solid" size="large">
                            Login
                        </Button>
                    </NavLink>
                    <NavLink to="/register">
                        <Button color="default" variant="solid" size="large">
                            Register
                        </Button>
                    </NavLink>
                </Space>
            </Flex>
        </Header>
    );
};