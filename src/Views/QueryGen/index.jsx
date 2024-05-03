import React, { useState, useEffect } from "react";
import "./index.css";
import { Card, Select, Row, Col, Input, Button, Alert, Switch } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import Domaindata from "../../Data/DomainItems.json";
import axios from "axios";
import { BASE_URL } from "../../config";
const { TextArea } = Input;
function QueryGen() {
  const [domainList, setDomainList] = useState(Domaindata ?? []);
  const [domainNames, setDomainNames] = useState(Object.keys(Domaindata) ?? []);
  const [selectedDomain1, setSelectedDomain1] = useState(null);
  const [selectedDomain2, setSelectedDomain2] = useState(null);
  const [selectedDomain1Data, setSelectedDomain1Data] = useState({});
  const [selectedDomain2Data, setSelectedDomain2Data] = useState({});
  const [dm1Data, setDm1Data] = useState({});
  const [dm2Data, setDm2Data] = useState({});
  const [domain1Val, setDomain1Val] = useState("");
  const [domain2Val, setDomain2Val] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryText, setQueryText] = useState("");
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggle = (value) => {
    setToggleValue(value);
    console.log(value);
  };
  const getQueryText = async () => {
    var url_link = "";
    setLoading(true);
    if (toggleValue == true) {
      url_link = "https://8cdb-198-24-35-210.ngrok-free.app/predict_llama/";
    } else {
      url_link = "https://8cdb-198-24-35-210.ngrok-free.app/predict_model/";
    }

    try {
      console.log(url_link);
      fetch(url_link, {
        method: "post",
        body: JSON.stringify({
          text: {
            [selectedDomain1]: domain1Val,
            [selectedDomain2]: domain2Val,
          },
        }),
      })
        .then(function (result) {
          return result.text();
        })
        .then(function (json) {
          console.log(json);
          setQueryText(json);
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };
  const onChangeDM1 = (value) => {
    setSelectedDomain1(value);
    setSelectedDomain1Data(domainList[value]);
  };
  const handleDm1Change = (key, value) => {
    debugger;
    let data = { ...dm1Data };
    data[key] = value;
    setDm1Data({ ...data });
  };
  const handleDm2Change = (key, value) => {
    let data = { ...dm2Data };
    data[key] = value;
    setDm2Data({ ...data });
  };
  const onSearchDM1 = (value) => {
    console.log("search:", value);
  };
  // Filter `option.label` match the user type `input`
  const filterOptionDM1 = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onChangeDM2 = (value) => {
    setSelectedDomain2(value);
    setSelectedDomain2Data(domainList[value]);
  };
  const onSearchDM2 = (value) => {
    console.log("search:", value);
  };
  // Filter `option.label` match the user type `input`
  const filterOptionDM2 = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleQueryGen = () => {
    getQueryText();
  };

  return (
    <Card
      style={{ margin: "1%", height: "79%", overflow: "hidden" }}
      actions={[
        <Button
          style={{ background: "#2859a5" }}
          type="primary"
          icon={<CheckOutlined />}
          size={"medium"}
          onClick={handleQueryGen}
          loading={loading}
        >
          Generate Query
        </Button>,
      ]}
    >
      <div style={{ height: queryText ? "65%" : "89%", overflow: "auto" }}>
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          <Col span={10}>
            <Select
              showSearch
              size={"large"}
              placeholder="Select Domain"
              optionFilterProp="children"
              onChange={onChangeDM1}
              onSearch={onSearchDM1}
              filterOption={filterOptionDM1}
              style={{ width: "100%" }}
              options={domainNames.map((item) => {
                return {
                  value: item,
                  label: item,
                };
              })}
            />
          </Col>
          <Col span={10}>
            <Select
              showSearch
              size={"large"}
              placeholder="Select Domain"
              optionFilterProp="children"
              onChange={onChangeDM2}
              onSearch={onSearchDM2}
              style={{ width: "100%" }}
              filterOption={filterOptionDM2}
              options={domainNames.map((item) => {
                return {
                  value: item,
                  label: item,
                };
              })}
            />
          </Col>
          <Col span={1}>
            <Switch
              checkedChildren="mod2"
              unCheckedChildren="mod1"
              checked={toggleValue}
              onChange={handleToggle}
            />
          </Col>
        </Row>
        <div style={{ paddingTop: "20px" }}>
          {!selectedDomain1 && !selectedDomain2 ? (
            <p style={{ height: "90%", overflow: "auto", marginTop: "10%" }}>
              <center>
                <h2>Please select the domains</h2>
              </center>
            </p>
          ) : (
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              <Col span={10}>
                {/* <div style={{ overflow: "auto", maxheight: "65%" }}>
                  {Object.keys(selectedDomain1Data).map((item) => (
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "5px",
                      }}
                    >
                      <Col style={{ width: "100%" }} span={11}>
                        {selectedDomain1Data[item] ?? ""}
                      </Col>
                      <Col span={12}>
                        <Input
                          placeholder={selectedDomain1Data[item]}
                          onChange={(e) =>
                            handleDm1Change(selectedDomain1Data[item], e.target.value)
                          }
                        />
                      </Col>
                    </Row>
                  ))}
                </div> */}
                <TextArea
                  value={domain1Val}
                  onChange={(e) => setDomain1Val(e.target.value)}
                  placeholder={`Enter the values for domain ${selectedDomain1}`}
                  autoSize={{ minRows: 5, maxRows: 15 }}
                />
              </Col>

              <Col span={10}>
                <div style={{ overflow: "auto", maxheight: "65%" }}>
                  {/* {Object.keys(selectedDomain2Data).map((item) => (
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "5px",
                      }}
                    >
                      <Col style={{ width: "100%" }} span={11}>
                        {selectedDomain2Data[item] ?? ""}
                      </Col>
                      <Col span={12}>
                        <Input
                          placeholder={selectedDomain2Data[item]}
                          onChange={(e) =>
                            handleDm2Change(
                              selectedDomain2Data[item],
                              e.target.value
                            )
                          }
                        />
                      </Col>
                    </Row>
                  ))} */}
                  <TextArea
                    value={domain2Val}
                    onChange={(e) => setDomain2Val(e.target.value)}
                    placeholder={`Enter the values for domain ${selectedDomain2}`}
                    autoSize={{ minRows: 5, maxRows: 15 }}
                  />
                </div>
              </Col>
              <Col span={1}></Col>
            </Row>
          )}
        </div>
      </div>
      <div style={{ height: "35%", overflow: "auto" }}>
        {queryText !== "" && (
          <>
            {" "}
            <h4> Query Text:</h4>
            <Alert
              style={{ height: "90%", overflow: "auto" }}
              message={queryText}
              type="info"
            />
          </>
        )}
      </div>
    </Card>
  );
}

export default QueryGen;
