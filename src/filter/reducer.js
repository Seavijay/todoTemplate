import {FilterTypes} from '..contants.js'
import {SET_FILTER} from './actionTypes.js/'

export default (state = FilterTypes.ALL, action) => {
    switch(action.type){
        case SET_FILTER: {
            return action.filter
        }
        default:
            return state
    }
}