import React from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { Navigate } from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom'
const { Footer, Sider, Content } = Layout;


export default function Admim() {
  const user = memoryUtils.user;

  if (!user) {  //没有登录 自动跳转到登录  在render()中
    return <Navigate to="/login" />
  }
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LeftNav />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{ margin: "20px", backgroundColor: "white" }}>
          {/* 二级路由展示区 */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center", color: "#ccc" }}>推荐使用谷歌浏览器，获得更佳操作体验</Footer>
      </Layout>
    </Layout>
  )

}