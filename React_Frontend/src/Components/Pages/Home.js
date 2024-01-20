import { Row, Col, Flex, Table, Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import "../Css/home.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/api/getuser");
    const data = result.data.map((user, index) => ({
      ...user,
      ids: index + 1,
      but: (
        <Space size={"small"}>
          <Link to={`/edituser/${user.id}`}>
            <Button
              type="primary"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Update
            </Button>
          </Link>
          <Button type="primary" danger onClick={()=>{ondelete(user.id)}}>
            Delete
          </Button>
        </Space>
      ),
    }));
    setUsers(data);
  };

  const ondelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/deleteuser/${id}`);
    loadUser()
  };

  const columns = [
    {
      title: <div style={{ textAlign: "center" }}>ID</div>,
      dataIndex: "ids",
    },
    {
      title: <div style={{ textAlign: "center" }}>Name</div>,
      dataIndex: "name",
    },
    {
      title: <div style={{ textAlign: "center" }}>Username</div>,
      dataIndex: "username",
    },
    {
      title: <div style={{ textAlign: "center" }}>Email</div>,
      dataIndex: "email",
    },
    {
      title: <div style={{ textAlign: "center" }}>Action</div>,
      dataIndex: "but",
    },
  ];

  return (
    <>
      <Flex justify="center" style={{ marginTop: "40px" }}>
        <Row>
          <Col span={20} offset={2}>
            <Table
              columns={columns}
              size="large"
              dataSource={users}
              className="table"
            ></Table>
          </Col>
        </Row>
      </Flex>
    </>
  );
}
