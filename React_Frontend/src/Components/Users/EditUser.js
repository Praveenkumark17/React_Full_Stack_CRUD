import { Button, Col, Flex, Input, Row, Space, Form, Spin } from "antd";
import Card from "antd/es/card/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let usenav = useNavigate();

  const {id} = useParams();

    const [users, setUsers] = useState({
      name: "",
      username: "",
      email: "",
    });

    // const { name, username, email } = users;

    const onChangeevent = (e) => {
      setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault()
      await axios.put(`http://localhost:8080/api/putuser/${id}`,users);
      usenav("/");
    };

//
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async (e) => {
    if (id) {
      const result = await axios.get(
        `http://localhost:8080/api/getuser/${id}`
      );
      const dataget = result.data;
      setUsers(dataget);
      console.log(result);
    }
  };

  //

  return (
    <div>
      <Flex align="center" vertical>
        <Row style={{ marginTop: "40px" }}>
          <Col span={20} offset={2}>
            <Card title="Update User" style={{ width: 600, textAlign: "center" }}>
              <Flex vertical>
                <form onSubmit={(e)=>{onSubmit(e)}}>
                  <Space direction="vertical" size={20}>
                    <Input
                      addonBefore="Username"
                      size="large"
                      placeholder="Enter Username..."
                      name="username"
                      value={users.username}
                      onChange={(e) => onChangeevent(e)}
                      style={{ width: 500 }}
                    />
                    <Input
                      addonBefore="Name"
                      size="large"
                      placeholder="Enter Name..."
                      onChange={(e) => onChangeevent(e)}
                      name="name"
                      value={users.name}
                    />
                    <Input
                      addonBefore="Email"
                      size="large"
                      placeholder="Enter Email..."
                      onChange={(e) => onChangeevent(e)}
                      name="email"
                      value={users.email}
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
