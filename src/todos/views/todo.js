import AddTodo from './addTodo.js'
import React from 'react'
import TodoList from './todoList.js'

export default () => {
    return (
        <div className='todos'>
            <AddTodo />
            <TodoList />
        </div>
    )
}