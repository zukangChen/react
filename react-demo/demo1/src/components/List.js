/**
 * Created by yuan on 2018/4/28.
 */
import React, { Component } from 'react';
import store from '../copyStore';
import { listConditon as actions, getList, delList } from '../copyStore/actions/list';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import axios from 'axios'


class List extends Component {
  static propTypes = {
    lists: PropTypes.array
  };
  constructor (props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => { });
  }
  componentWillUnmount() {
    this.unsubscribe();//取消订阅
  }
  componentDidMount() {
    console.log('actions', actions)
    console.log('del', delList)
    const action = getList()
    store.dispatch(action)
    axios.post('http://127.0.0.1:4523/mock/577129/getOneList', { id: 1 }).then((res) => {
      console.log('apiFox', res)
    })
  }
  handleAdd = (e) => {
    let code = e.keyCode
    if (code === 13) {
      this.props.add_todo(this.todo.value)
      this.todo.value = ''
    }
  }
  delMyList(index) {
    console.log('sd', index)
    store.dispatch(delList(index))
  }
  render() {
    const t = this
    return (
      <div>
        <li>{this.state.test}</li>
        <input ref={input => this.todo = input} onKeyDown={this.handleAdd} />
        <ul>
          {
            this.props.lists.map((list, index) => (
              <li key={index} style={{ textDecoration: list.completed ? 'line-through' : '' }}>
                <span onDoubleClick={() => t.props.toggle_todo(index)}>{list.text}</span>
                <button onClick={() => t.props.del_todo(index)}>删除</button>
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.props.switch_type('all')} style={{ color: this.props.newType === 'all' ? 'red' : 'black' }}>全部</button>
        <button onClick={() => this.props.switch_type('completed')} style={{ color: this.props.newType === 'completed' ? 'red' : 'black' }}>只显示已完成</button>
        <button onClick={() => this.props.switch_type('uncompleted')} style={{ color: this.props.newType === 'uncompleted' ? 'red' : 'black' }}>只显示未完成</button>
        <div className="myList">
          <h2>redux-thunk 异步请求数据测试</h2>
          <ul>
            {
              this.props.myList.map((list, index) => (
                <li key={index} style={{ textDecoration: list.completed ? 'line-through' : '' }}>
                  <span onDoubleClick={() => t.props.toggle_todo(index)}>{list.name}</span>
                  <button onClick={this.delMyList.bind(this, index)}>删除</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
const stateToProps = (state) => {
  return {
    ...state.todos, lists: state.todos.lists.filter(item => {
      if (state.todos.newType === 'all') {
        return item
      } else if (state.todos.newType === 'completed') {
        return item.completed
      } else if (state.todos.newType === 'uncompleted') {
        return !item.completed
      }
    })
  }
}
// const dispatchToProps = (dispatch) => {
//   return {

//   }
// }
export default connect(
  stateToProps,
  actions
)(List)