import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions.js'

class AddTodo extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            value: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.refInput = this.refInput.bind(this)
    }

    onInputChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const inputValue = this.state.value
        if (!input.value.trim()) {
            return
        }
        this.props.onAdd(inputValue)
        this.setState({ value: '' })
    }

    render() {
        return (
            <div className='add-todo'>
                <form onSubmit={this.onSubmit}>
                    <input className='new-todo' onChange={this.onInputChange()}
                        value={this.state.value} />
                    <button className='add-btn' type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
AddTodo.protoTypes = {
    onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => { dispatch(addTodo(text)) }
    }
}
export default connect(null.mapDispatchToProps)(AddTodo)