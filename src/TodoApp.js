import { view as Filter } from './filter'
import React from 'react'
import { view as Todos } from './todos'

function TodoApp() {
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    )
}
export default TodoApp