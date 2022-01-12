import React, { Component } from 'react';
import store from '../copyStore';
import actions from '../copyStore/actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => { });
  }
  componentWillUnmount() {
    this.unsubscribe();//取消订阅
  }
  render() {
    //console.log('counter render')
    return (
      <div style={{ border: '1px solid red' }}>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}> + </button>
        <button onClick={this.props.decrement}> - </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.counter
}

const mapDispatchToProps = (dispath) => {
  console.log(dispath)
  return dispath
}
console.log(mapDispatchToProps)

export default connect(
  mapStateToProps,
  actions
)(Counter)