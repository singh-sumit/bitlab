import { CodeOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import React from "react";

const buttomStyle: React.CSSProperties = {
    background: "#161010", width: "130px",borderRadius: 0
};
const titleStyle: React.CSSProperties = {
    color: "#fff", margin: 5 
}
const iconStyle: React.CSSProperties = {
    fontSize: '24px', color: "#fff", margin: 0, padding: 0 
}

export const Brand: React.FC = () => {
    const { Title } = Typography

    return (
        <Button
            color="default"
            type="link"
            style={buttomStyle}
            size="large"
        >
            <Title level={3} style={titleStyle}>Bitlab</Title>
            <CodeOutlined style={iconStyle} />
        </Button>
    );
};