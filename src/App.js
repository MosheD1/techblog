import React, { Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import BlogForm from './Components/BlogForm/BlogForm';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import BlogList from './Components/BlogList/BlogList';
import MainPage from './Components/MainPage/MainPage';

import './App.css';

const blogs = [
  {
    title: 'The new world'
  },
  {
    title: 'The new dicovery'
  },
  {
    title: 'The idea'
  },
  {
    title: 'What Next'
  },
  {
    title: 'In 10 Years'
  }
];

const initialState = {
  route: 'signin',
  subRoute: 'mainPage',
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

  onSubRouteChange = (subRoute) => {
    this.setState({subRoute: subRoute});
  }

  render() {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
          ? (this.state.subRoute == 'mainPage' 
              ? <MainPage onSubRouteChange={this.onSubRouteChange} name={this.state.user.email} blogs={blogs} /> 
              : <BlogForm onSubRouteChange={this.onSubRouteChange}/>)
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
