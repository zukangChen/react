// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import TodoList from './TodoList';

// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();

// 下面的是copyStore的index.js
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import List from './components/List'
import store from './copyStore';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
console.log('store', store)
ReactDOM.render((
  <Provider store={store}>
    <React.Fragment>
      <Counter />
      <br />
      <List />
    </React.Fragment>
  </Provider>
), document.getElementById('root'));

reportWebVitals();
