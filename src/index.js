import {Provider} from 'react-redux'

ReactDom.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.querySelector('#root')
)