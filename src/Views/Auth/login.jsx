import React from "react";
import Background from "../../assets/lsac_login_bg.png";
import appLogo from "../../assets/saama_logo.svg";
import { Button, Form, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
export default function Login() {
  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "admin") {
      console.log("Success:", values);
      localStorage.setItem("isAuth", true);
      window.location.reload();
    } else {
      alert("Invalid credentials.");
    }
  };
  return (
    <div
      className="login_container"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="main_content">
        <span>
          <span className="logo_span">
            <img className="logo" src={appLogo} alt="Saama" />
          </span>
          {/* <p className="main_app_heading">APP NAME</p> */}
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item name="username">
              <Input
                size="large"
                placeholder="User Name"
                style={{
                  marginTop: "10px",
                }}
                className="ip"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                size="large"
                placeholder="User Name"
                className="ip"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="ip" type="primary">
                Login
              </Button>
            </Form.Item>
          </Form>
        </span>
      </div>
    </div>
  );
}
