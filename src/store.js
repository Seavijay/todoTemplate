import {combineReducers, createStore} from 'redux'

import{reducer as filterReducer} from './filter'
import{reducer as todoReducer} from './todos'

const initValues = {
    'filter': 'all',
    'todos': [
        {
            'completed': false,
            'id': 0,
            'text': 'First todo'
        },
        {
            'completed': false,
            'id': 0,
            'text': 'Second todo'
        }
    ]
}
const reducer = combineReducers({
    'filter': filterReducer,
    'todo': todoReducer
})

export default createStore(reducer, initValues) 