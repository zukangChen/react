// 尝试另一种redux写法
import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import store from './store/index'
import { increment, decrement, incrementByAmount, addList, delList, changeInputVal } from './store/user'; // 引入对应的action方法
console.log('store', store.getState()) // 通过getState()获取redux集中管理的值
class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      copyVal: 'ddd',
      ...store.getState().usersReducer // 将state的数据放入state
    }
    this.storeChange = this.storeChange.bind(this) // 绑定this
    // store.subscribe(this.storeChange)
  }
  //组件挂载完成时候触发的生命周期函数
  componentDidMount() {
    store.subscribe(this.storeChange) // 监听vuex的改变
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input value={this.state.inputVal} onChange={this.inputValChage.bind(this)} placeholder="请输入你的2022目标" style={{ width: "300px", marginRight: "10px", marginLeft: "10px" }}></Input>
          <Button onClick={this.addList.bind(this)} type="primary">增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.delList.bind(this, index)}>
                {item}
              </List.Item>
            )} />
        </div>
        <div>
          <label>数量: {this.state.value}</label>
        </div>
      </div >
    );
  }
  // 输入框的值变化
  inputValChage(e) {
    console.log('ds', e.target.value)
    store.dispatch(changeInputVal(e.target.value))
    // this.setState({
    //   inputVal: e.target.value
    // })
  }
  // 添加列表
  addList() {
    // store.dispatch(incrementByAmount(6))
    store.dispatch(addList(this.state.inputVal))
    store.dispatch(increment())
    store.dispatch(changeInputVal(''))
    // if (this.state.inputVal) {
    //   this.setState({
    //     list: [...this.state.list, this.state.inputVal]
    //   })
    //   this.setState({
    //     inputVal: ''
    //   })
    // }
  }
  // 删除列表
  delList(index) {
    store.dispatch(delList(index))
    store.dispatch(decrement())
    // let list = this.state.list
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
  }
  storeChange() { // 监听函数，当veux里的值发生改变之后，把state的值实时更新，让页面及时响应
    this.setState({
      ...store.getState().usersReducer
    })
  }
}

export default TodoList;