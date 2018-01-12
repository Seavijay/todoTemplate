import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store.js'
import TodoApp from './TodoApp';

ReactDom.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.querySelector('#root')
)