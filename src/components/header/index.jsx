import React from 'react'
import "./index.css"

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <span> 欢迎，admin</span>
        <a href="javascript:;">退出</a>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">
          首页
        </div>
        <div className="header-bottom-right">
          <span>
            2022-5-15 20:20:20
          </span>
          <img src="https://lmg.jj20.com/up/allimg/tx19/460320314920740.jpg" alt="" />
          <span>
            晴
          </span>
        </div>
      </div>
    </div >

  )
}
