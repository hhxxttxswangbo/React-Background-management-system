import axios from 'axios'
import { message } from "antd"

//统一处理异常

// 传入发请求的三个数据 url必须有 data可能没有参数 type请求方式，如果是get，不传第三个参数
export default function ajax(url, data = {}, type = "GET") {

  return new Promise((resolve, reject) => {
    let promise
    //1.执行异步ajax请求
    if (type === "GET") {
      promise = axios.get(url, {
        params: data  //请求参数配置
      })
    } else {
      promise = axios.post(url, data)
    }


    promise.then((response) => {
      //2.成功了,调用resolve
      resolve(response)
    }).catch((err) => {
      //3.失败了，提示信息
      message.error("请求出错了" + err.message)
    })


  })
}

//请求登录接口  分别对应三个形参  专门封装一个模块index.js
// ajax("/login", { username: "tom", password: "12345" }, "POST")