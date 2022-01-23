import React, { Component } from 'react';
import { Outlet } from 'react-router';
class ListIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log('this', this)
  }
  render() {
    return (
      <div>
        列表入口页
        <Outlet />
      </div>
    );
  }
}

export default ListIndex;