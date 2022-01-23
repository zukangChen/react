import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Shouye extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        { uid: 123, title: '技术胖的个人博客-1' },
        { uid: 456, title: '技术胖的个人博客-2' },
        { uid: 789, title: '技术胖的个人博客-3' },
      ]
    }
  }
  render() {
    return (
      <div className="shouye">
        <Link to="/listIndex">我想去列表页</Link>
        <Link to={{ pathname: '/listIndex', query: { id: 123 } }}>我想去列表页a</Link>
        <button onClick={this.turnTo.bind(this, 123)}>点击一下</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/listIndex/${item.uid}`}> {item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
  componentDidMount() {
    console.log('shouye', this.props)
  }
  turnTo(id) {
    console.log('id', id)
    console.log('sds', this.props)
    this.props.history.push(`/list/${id}`)
  }
}

export default Shouye;