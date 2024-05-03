import React from "react";
import { Card, Select, Row, Col, Input, Button } from "antd";

function QueryResults() {
  return (
    <Card style={{ margin: "1%", height: "79%", overflow: "hidden" }}>
      <div>{localStorage.getItem('queryText')}</div>
    </Card>
  );
}

export default QueryResults;
