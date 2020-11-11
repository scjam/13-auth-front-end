import React, { Component } from 'react'

export default class Auth extends Component {
    
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}
