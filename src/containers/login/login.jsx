import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import "./css/login.css"
import logo from './images/logo.png'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'


export default function Login() {
  const navigate = useNavigate()   //跳转路由钩子，一定要写在方法外面

  async function onFinish(values) {
    // console.log(values);
    const { username, password } = values  //这里的解构要跟Form.Item里name一致

    const response = await reqLogin(username, password)
    console.log("请求成功", response.data);  //这里要取到data
    const result = response.data;
    if (result.status === 0) {   //登录成功
      message.success("登陆成功")

      //保存user
      const user = result.data   //从result.data取得user
      memoryUtils.user = user    //保存到内存中

      storageUtils.saveUser(user) //保存在local中
      //跳转到admin
      // this.props.history.replace("/admin")
      navigate("/admin")
    } else {
      message.error(result.msg)
    }
  }




  //如果已经登录,自动转到admin
  const user = memoryUtils.user;
  if (user) {
    return <Navigate to="/admin" />
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
            rules={[
              { required: true, message: 'Please input your Username!' },
              { max: 12, message: '用户名必须小于12位' },
              { min: 4, message: '用户名必须大于4位' },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
              { max: 12, message: '用户名必须小于12位' },
              { min: 4, message: '用户名必须大于4位' },
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
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="Forgot password">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="register now!">register now!</a>
          </Form.Item>
        </Form>
      </section>
    </div >

  )

}
