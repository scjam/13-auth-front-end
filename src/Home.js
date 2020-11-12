import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div id='main'>
                <h1>Welcome to the Home Page</h1>
                <Link to="/todos"><div>Your List of To Dos</div></Link>
            </div>
        )
    }
}
