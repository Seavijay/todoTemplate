import AddTodo from './addTodo.js'
import React from 'react'
import TodoList from './todoList.js'
import './style.css'

export default () => {
    return (
        <div className='todos'>
            <AddTodo />
            <TodoList />
        </div>
    )
}