import {SET_FILTER} from './actionTypes.js'

export const setFilter = (filterType) => ({
    'filter': filterType,
    'type': SET_FILTER
})