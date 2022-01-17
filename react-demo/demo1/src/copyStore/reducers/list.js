import * as types from '../action-types'
const defaultState = {
  lists: [{ text: '移动端计划' }],
  newType: 'all',
  myList: []
}
export default function list(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return { ...state, lists: [...state.lists, { text: action.text }] }
    case types.TOGGLE_TODO:
      return {
        ...state, lists: state.lists.map((item, index) => {
          if (index === action.index) {
            item.completed = !item.completed
          }
          return item
        })
      }
    case types.DEL_TODO:
      return { ...state, lists: [...state.lists.slice(0, action.index), ...state.lists.slice(action.index + 1)] }
    case types.SWITCH_TYPE:
      console.log({ ...state, newType: action.newType })
      return { ...state, newType: action.newType }
    case types.GET_LIST:
      console.log('最后', action)
      return { ...state, myList: action.data }
    case types.DEL_LIST:
      console.log('到这里了吗', action)
      const copyList = JSON.parse(JSON.stringify(state.myList))
      copyList.splice(action.index, 1)
      return { ...state, myList: copyList }
    default:
      return state;
  }
}