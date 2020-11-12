import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import './App.css';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Home from './Home.js';
import ToDos from './ToDos';
import Privacy from './Privacy';

export default class App extends Component {
  
  state = {
    username: localStorage.getItem('USERNAME') || '',
    token: localStorage.getItem('TOKEN') || '',
  }

  changeEmailToken = (username, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USERNAME', username);

    this.setState({
      username: username,
      token: token
    })
  }

  logOut = () => {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('USERNAME', '');

    this.setState({ username: '', token: '' })
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            { 
            this.state.token
            ? <div>
              {this.state.username}
              <button onClick={this.logOut}>Log Out</button>
            </div>
            : <> 
              <Link to="/login"><div>Log In Here</div></Link>
              <Link to="/signup"><div>Sign Up Here</div></Link>
            </>}
          </ul>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
            <Route exact path='/login' render={(routerProps) => 
              <Login 
                {...routerProps}
                changeEmailToken={this.changeEmailToken}
              />
            } />
            <Route 
              exact 
              path='/signup' 
              render={(routerProps) => 
                <SignUp 
                  {...routerProps}
                  changeEmailToken={this.changeEmailToken} 
                />
              } 
            />
            <Privacy 
              token={this.state.token}
              exact 
              path='/todos' 
              render={(routerProps) => 
                <ToDos 
                  {...routerProps} 
                  token={this.state.token} 
                />
              } 
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

