import React, { Component } from 'react';
class Boss extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggle = this.toToggle.bind(this)
  }
  render() {
    return (
      <div>
        <div className={this.state.isShow ? 'show' : 'hide'}>Boss级任务 孙悟空</div>
        <button onClick={this.toToggle}>召唤boss</button>
      </div>
    );
  }
  toToggle() {
    let show = JSON.parse(JSON.stringify(this.state.isShow))
    this.setState({
      isShow: !show
    })
  }
}

export default Boss;