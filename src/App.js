import React, { Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import BlogForm from './Components/BlogForm/BlogForm';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';

import './App.css';

const initialState = {
  route: 'signin',
  user: {
    email: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (userData) => {
    this.setState({user: {
      email: userData.signinEmail
    }});
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        <h1>{this.state.user.email}</h1>
        {this.state.route === 'home'
          ? <BlogForm onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          : (this.state.route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              : <Register onRouteChange={this.onRouteChange}/> 
            )
        }
      </div>
    );
  }
}

export default App;
