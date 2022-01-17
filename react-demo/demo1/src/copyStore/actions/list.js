import * as types from "../action-types";
import axios from 'axios'
export let listConditon = {
  add_todo(text) {
    return { type: types.ADD_TODO, text: text }
  },
  del_todo(idx) {
    return { type: types.DEL_TODO, index: idx }
  },
  toggle_todo(index) {
    return { type: types.TOGGLE_TODO, index }
  },
  // del_todo(index){
  //     return {type:types.DEL_TODO, index}
  // },
  switch_type(newType) {
    return { type: types.SWITCH_TYPE, newType }
  }
}
// export default listConditon
export const getListAction = (data) => {
  return { type: types.GET_LIST, data }
}
// 使用redux-thunk中间件使用异步请求数据
export const getList = () => {
  return (dispatch) => {
    axios.get('http://yapi.xbongbong.com/mock/12/getProcessAllList').then((res) => {
      const data = res.data.result.stageList
      console.log('resaaa', data)
      const action = getListAction(data)
      dispatch(action)
    })
  }
}
export const delList = (index) => {// 删除list
  return { type: types.DEL_LIST, index }
}
// export default {
//   add_todo(text) {
//     return { type: types.ADD_TODO, text: text }
//   },
//   del_todo(idx) {
//     return { type: types.DEL_TODO, index: idx }
//   },
//   toggle_todo(index) {
//     return { type: types.TOGGLE_TODO, index }
//   },
//   // del_todo(index){
//   //     return {type:types.DEL_TODO, index}
//   // },
//   switch_type(newType) {
//     return { type: types.SWITCH_TYPE, newType }
//   }
// }