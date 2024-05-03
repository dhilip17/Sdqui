import React from "react";
import "./index.css";
import { Alert } from "antd";

function Apperror(props) {
  console.log("error here");
  return (
    <div className="error_div">
      <Alert message="Error" description={props.error} type="error" showIcon />
    </div>
  );
}

export default Apperror;
