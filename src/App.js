import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import './App.css';
import Auth from './Auth.js'
import Home from './Home.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <Link to="/auth">Sign Up/Log In</Link>
          </ul>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
            <Route exact path='/auth' render={(routerProps) => <Auth {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

