
import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'; // 合并多个reducer
import usersReducer from './user.js'

const productsReducer = function (state = [], action) {
  return state;
}

const cartReducer = function (state = [], action) {
  return state;
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  usersReducer: usersReducer
}

const rootReducer = combineReducers(allReducers); // 合并所有的reducer

// let store = configureStore({
//   reducer: rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux_dev_tools方法
// })
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux_dev_tools方法
);

export default store