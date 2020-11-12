import React, { Component } from 'react'
import request from 'superagent'

export default class ToDos extends Component {
    state = {
        todos: [],
        todoTask: '',
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchTodos()
    }
    
    fetchTodos = async() => {
        await this.setState({ loading: true });
        const response = await request.get('https://mysterious-hamlet-17978.herokuapp.com/api/todos')
        .set('Authorization', this.props.token)
        
        await this.setState({ todos: response.body, loading: false })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newTodo = {
            todo: this.state.todoTask
        };

        await this.setState({ loading: true });

        await request.post('https://mysterious-hamlet-17978.herokuapp.com/api/todos')
        .send(newTodo)
        .set('Authorization', this.props.token)
        
        await this.fetchTodos();
    }

    handleCompletedClick = async (someId) => {
        await request.put(`https://mysterious-hamlet-17978.herokuapp.com/api/todos/${someId}`)
        .set('Authorization', this.props.token);
        await this.fetchTodos();
    }

    render() {
        return (
            <div>
                The To Dos:
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add a to do:
                        <input 
                            value={this.state.todoTask}
                            onChange={(e) => this.setState({ todoTask: e.target.value })}
                        />
                    </label>
                    <button>Add To Do</button>
                </form>
                {
                    this.state.loading

                    ? 'loading...'
                    : this.state.todos.map(todo => <div key={`${todo.todo}${todo.id}${Math.random()}`} style={{textDecoration: todo.completed ? 'line-through' : 'none'}
                    }>
                    todo: {todo.todo}
                    {
                        todo.completed ? '' : <button onClick={() => this.handleCompletedClick(todo.id)}>
                            Complete To Do
                        </button>
                    }
                    </div>)
                }
            </div>
        )
    }
}
