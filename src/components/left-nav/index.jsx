import React from 'react'
import "./index.css"
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'
import { useLocation } from 'react-router-dom'

const { SubMenu } = Menu;

export default function LeftNav() {

  function getMenuNodes(menuList) {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }

  // 接收跳转传过来的值
  const location = useLocation()
  // console.log(location);
  const path = location.pathname;
  console.log(path);

  return (
    <div className="left-nav">
      <Link to="/admin">
        <div className="left-nav-header">
          <img src={Logo} alt="" />
          <h1>后台系统</h1>
        </div>
      </Link>

      <div>
        <Menu
          defaultSelectedKeys={[path]}
          mode="inline"
          theme="dark"
        >
          {
            getMenuNodes(menuList)
          }
        </Menu>
      </div>
    </div>
  )
}
