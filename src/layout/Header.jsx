import React from "react";
import { Layout, Menu } from "antd";
import saama_logo from "../assets/saama_logo.svg";
const { Header } = Layout;

function RHeader() {
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#002967",
        }}
      >
        <div>
          <img className="px-2 saama-logo" src={saama_logo} alt="saama logo" />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          style={{ flex: 1, minWidth: 0, background: "#002967" }}
        />
      </Header>
    </>
  );
}

export default RHeader;
