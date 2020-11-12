import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {
    
    state = {
        email: '',
        password: '',
        loading: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        this.setState({ loading: true })
        const user = await request
            .post('https://mysterious-hamlet-17978.herokuapp.com/auth/login')
            .send(this.state);
        
        this.setState({ loading: false })
        this.props.changeEmailToken(user.body.email, user.body.token);
        this.props.history.push('/todos');
    }
    
    render() {
        return (
            <div>
                <h1>Login Here</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input 
                        onChange={(e) => this.setState({ email: e.target.value })}
                        value={this.state.email} />
                    </label>
                    <label>
                        Password:
                        <input 
                        onChange={(e) => this.setState({ password: e.target.value })}
                        value={this.state.password}
                        type="password" />
                    </label>
                    {
                        this.state.loading
                        ? 'loading'
                        : <button>Sign Up!</button>
                    }
                </form>
            </div>
        )
    }
}
