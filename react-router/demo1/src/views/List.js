import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class List extends Component {
  constructor (props) {
    super(props);
    this.state = {
      smile: '微笑啊'
    }
  }

  render() {
    return (
      <div className="shouye">
        <Link to="/">我想去首页</Link>
      </div>
    );
  }
  componentDidMount() {
    console.log('列表', this.props)
  }
}


export default List;