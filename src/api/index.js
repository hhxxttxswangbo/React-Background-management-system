//应用中所有接口

import ajax from './ajax'

//本地接口 不固定 不写
const BASE = ''


//登录
export function reqLogin(username, password) {
  //这里传参看文档要传什么  必须return
  return ajax(BASE + "/login", { username, password }, "POST")
}

//添加用户  这里参数太多，直接写一个user
export function reqAddUser(user) {
  return ajax(BASE + '/manage/user/add', user, "POST")
}