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
    margin: '15% auto',
}

type FieldType = {
    email?: string;
    password?: string;
    confirmPassword?: string;
};


export const Register: React.FC = () => {

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
                    title="Register"
                    style={cardStyle}
                >
                    <Form
                        name="register_form"
                        layout="vertical"
                        size="large"
                        initialValues={{ }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email address!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please input your confirm password!' }]}
                        >
                            <Input.Password />
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