import {combineReducers, createStore} from 'redux'

import{reducer as filterReducer} from './filter'
import{reducer as todoReducer} from './todos'

const initialValue = {
    todos:[
        {
            text: 'First todo',
            completed: false,
            id: 0
        },
        {
            text: 'Second todo',
            completed: false,
            id: 0
        }
    ],
    filter:'all'
}
const reducer = combineReducers({
    todo:todoReducer,
    filter:filterReducer
})

export default createStore(reducer) 