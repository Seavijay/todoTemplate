import{ADD_TODO, REMOVEI_TODO, TOGGLE_TODO} from './actionTypes.js'

export default (state=[], action)=>{
    switch(action.type){
        case ADD_TODO: {
            return[
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        case REMOVEI_TODO: {
            return state.filter((todoItem)=>{
                return todoItem.id!==action.id
            })
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem.id===action.id){
                    return {...todoItem,completed:!todoItem.completed}
                }else{
                    return todoItem
                }
            })
        }
        default:{
            return state
        }
    }
}