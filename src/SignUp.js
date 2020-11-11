import React, { Component } from 'react'
import request from 'superagent';

export default class Auth extends Component {
    
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
            .post('https://mysterious-hamlet-17978.herokuapp.com/auth/signup')
            .send(this.state);
        
        this.setState({ loading: false })
        this.props.changeTokenAndUserName(user.body.email)
    }
    
    render() {
        return (
            <div>
                <h1>Sign Up/Log In Here</h1>
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
                        this.state.loading? 'loading'
                        : <button>Sign Up!</button>
                    }
                </form>
            </div>
        )
    }
}
