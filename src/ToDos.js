import React, { Component } from 'react'
import request from 'superagent'

export default class ToDos extends Component {
    state = {
        todos: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://mysterious-hamlet-17978.herokuapp.com/api/todos')
            .set('Authorization', this.props.token)
        
        this.setState({ todos: response.body })
    }
    
    render() {
        return (
            <div>
                The To Dos:
                {
                    !!this.state.todos.length && this.state.todos.map(todo => 
                        <div>
                            Task: {todo.todo};
                            Status: {todo.completed}
                        </div>
                    )
                }
            </div>
        )
    }
}
