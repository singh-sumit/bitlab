import React from "react";
import type { FormProps } from 'antd';
import { Layout, Button, Form, Input, Card } from 'antd';
import { NavBar } from "@components/NavBar/NavBar";
import wave from '@assets/wave1.svg';

const { Content } = Layout;

const layoutStyle: React.CSSProperties = {
    height: '100vh',
};

const contentStyle: React.CSSProperties = {
    maxWidth: '100%',
    backgroundImage: `url(${wave})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const cardStyle: React.CSSProperties = {
    width: 400,
    margin: '20% auto',
}

type FieldType = {
    email?: string;
    password?: string;
};


export const Login: React.FC = () => {

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout style={layoutStyle}>
            <NavBar />
            <Content style={contentStyle}>
                <Card
                    title="Login"
                    style={cardStyle}
                >
                    <Form
                        name="login_form"
                        style={{ maxWidth: 600 }}
                        size="large"
                        initialValues={{}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Email Address" />
                        </Form.Item>

                        <Form.Item<FieldType>
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
        </Layout>
    );
};