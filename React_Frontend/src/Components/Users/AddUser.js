import { Button, Col, Flex, Input, Row, Space, Form } from "antd";
import Card from "antd/es/card/Card";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

let usenav = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onChangeevent = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8080/api/saveuser",user);
    usenav("/");
  };


  return (
    <div>
      <Flex align="center" vertical>
        <Row style={{ marginTop: "40px" }}>
          <Col span={20} offset={2}>
            <Card title="ADD User" style={{ width: 600, textAlign: "center" }}>
              <Flex vertical>
                <form onSubmit={(e)=>{onSubmit(e)}}>
                  <Space direction="vertical" size={20}>
                    <Input
                      addonBefore="Username"
                      size="large"
                      placeholder="Enter Username..."
                      name="username"
                      onChange={(e) => onChangeevent(e)}
                      style={{ width: 500 }}
                    />
                    <Input
                      addonBefore="Name"
                      size="large"
                      placeholder="Enter Name..."
                      onChange={(e) => onChangeevent(e)}
                      name="name"
                    />
                    <Input
                      addonBefore="Email"
                      size="large"
                      placeholder="Enter Email..."
                      onChange={(e) => onChangeevent(e)}
                      name="email"
                    />
                    <Flex justify="end">
                      <Space size={"large"}>
                        <Link to={"/"}>
                          <Button type="primary" danger>
                            Cancel
                          </Button>
                        </Link>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{ backgroundColor: "green" }}
                        >
                          Submit
                        </Button>
                      </Space>
                    </Flex>
                  </Space>
                </form>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Flex>
    </div>
  );
}
