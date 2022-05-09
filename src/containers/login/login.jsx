import React from 'react'
import "./css/login.css"
import logo from './images/logo.png'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { reqLogin } from '../../api'
import { createDemo1Action, createDemo2Action } from '../../redux/actions/test'


function Login(props) {
  function onFinish(values) {
    const { usernames, password } = values
    reqLogin(usernames, password)
  }

  return (
    <div className="login">
      <header >
        <img src={logo} alt="logo" />
        <h1>商品管理系统</h1>
      </header>
      <section>
        <h1>用户登录</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' },
            { max: 12, message: '用户名必须小于12位' },
            { min: 4, message: '用户名必须大于4位' },
            { pattern: /^\w+$/, message: '用户名必须字母，数字，下划线组合' },]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
              { max: 12, message: '用户名必须小于12位' },
              { min: 4, message: '用户名必须大于4位' },
              { pattern: /^\w+$/, message: '用户名必须字母，数字，下划线组合' }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>

            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div >

  )
}

export default connect(
  state => ({
    demo: state.testKey  //reducers中index里
  }),
  {
    demo1: createDemo1Action,  //actions里
    demo2: createDemo2Action,
  }
)(Login)
