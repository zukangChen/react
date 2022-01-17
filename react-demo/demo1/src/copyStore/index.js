
// 另一种redux写法
// applyMiddleware添加中间件 compose增强函数(可以理解为执行完一个函数接着执行下一个函数，类似于链式调用)
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk' // 引入redux-thunk中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose // redux_dev_tools中间件
const enhancer = composeEnhancers(applyMiddleware(thunk))
let store = createStore(
  rootReducer,
  enhancer
);

window.store = store;
export default store;