import React, { Component } from 'react'
import XiaojiejieItem from './xiaojiejieItem'
import Boss from './Boss'
class Xiaojiejie extends Component {
  constructor (props) {
    // construct 构造函数
    super(props) // super继承父类的的props
    this.state = { // state 是放本组件的data
      inputValue: 'smile',
      list: ['基础按摩', '精油推背']
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
        <button onClick={this.addService.bind(this)}>增加服务</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li onClick={this.delService.bind(this, index)} key={index}>{item}</li>
              return <XiaojiejieItem content={item} key={index} index={index} delService={this.delService.bind(this)}></XiaojiejieItem>
            })
          }
          <Boss></Boss>
        </ul>
      </div>
    )
  }
  // input值变化时
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // 增加服务
  addService(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
    console.log('cc', this.state.list)
  }
  // 删除服务
  delService(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie