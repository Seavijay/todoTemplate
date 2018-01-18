import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import store from './Store.js';

const root = document.querySelector('#root')
const element = (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
const render=()=>ReactDOM.render(element, root)

render()