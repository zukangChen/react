import React, { Component } from 'react';
import propTypes from 'prop-types'


class XiaojiejieItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.delItem = this.delItem.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content
  }
  render() {
    return <li onClick={this.delItem}>{this.props.content} {this.props.name}</li>;
  }
  delItem(item, index) {
    console.log('this', this)
    this.props.delService(this.props.index)
    return
  }
}
XiaojiejieItem.propTypes = {
  content: propTypes.string,
  index: propTypes.number,
  delService: propTypes.func
}
XiaojiejieItem.defaultProps = {
  name: 'smile'
}
export default XiaojiejieItem;