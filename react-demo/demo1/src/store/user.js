import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    list: [
      '* 玩转webpack(极客时间 程柳峰)',
      '* javaScript核心原理解析(极客时间 周爱民)'
    ],
    inputVal: 'ready go', // 输入框的值
    value: 2,
    smile: '咋回事啊'
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action)
      state.value += action.payload
    },
    changeInputVal: (state, action) => { // 改变inputVal值
      state.inputVal = action.payload
    },
    addList: (state, action) => {
      state.list = [...state.list, action.payload]
      console.log('addList', state.list)
    },
    delList: (state, action) => {
      console.log('del', action)
      state.list.splice(action.payload, 1)
    }
  }
})
console.log('actions', counterSlice)
export const selectCount = (state) => state.value
export const { increment, decrement, incrementByAmount, changeInputVal, addList, delList } = counterSlice.actions

export default counterSlice.reducer