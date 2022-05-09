// import { createStore, applyMiddleware } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducers from "./reducers/index"


//从redux-thunk引入thunk，用于支持异步action  同时要从react中引入applyMiddleware
import thunk from "redux-thunk"


export default createStore(reducers, applyMiddleware(thunk))