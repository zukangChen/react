import { combineReducers } from 'redux' // 合并多个reducer
import counter from './counter'
import todos from './list'

export default combineReducers({
  counter,
  todos
})