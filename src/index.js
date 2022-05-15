import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

import storageUtils from "./utils/storageUtils"
import memoryUtils from "./utils/memoryUtils"
//读取local中保存user，保存到内存中
const user = storageUtils.getUser()
memoryUtils.user = user

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
