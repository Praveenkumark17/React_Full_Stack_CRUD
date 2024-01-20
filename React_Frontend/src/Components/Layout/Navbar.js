import { Button, Flex, Layout, Menu, Space } from "antd";
import {  Header } from "antd/es/layout/layout";
import Item from "antd/es/list/Item";
import React from "react";
import "../Css/nav.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Layout>
        <Header about="User List">
          <Flex justify="space-between">
            <Menu theme="dark" mode="horizontal" className="menu">
              <Space size={"middle"}>
                <Item key={'title'} className="nav_head">Spring + React</Item>
                <Item key={'home'}><Link to={"/"}><Button className="but" type="link">Home</Button></Link></Item>
                <Item key={'about'}><Button className="but" type="link">About</Button></Item>
                <Item key={'contact'}><Button className="but" type="link">Contact</Button></Item>
              </Space>
            </Menu>
            <Menu theme="dark" mode="horizontal">
              <Item className="adduse" style={{ marginLeft: "auto" }}>
                <Link to={"/adduser"}><Button className="but_add" type="link">Add User</Button></Link>
              </Item>
            </Menu>
          </Flex>
        </Header>
      </Layout>
    </div>
  );
}
