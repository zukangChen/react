
// 另一种redux写法
import { createStore } from 'redux'
import rootReducer from './reducers'

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux_dev_tools方法
);

window.store = store;
export default store;