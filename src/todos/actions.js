import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionTypes.js'

let nextTodoId = 1
export const addTodo = (text) => ({
    'type': ADD_TODO,
    'completed': false,
    'id': nextTodoId++,
    'text': text
})
export const toggleTodo = (id) => ({
    'type': TOGGLE_TODO,
    'id': id
})
export const removeTodo = (id)=>({
    'type':REMOVE_TODO,
    'id':id
})