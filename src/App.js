import React, { Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import BlogForm from './Components/BlogForm/BlogForm';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import MainPage from './Components/MainPage/MainPage';

import './App.css';

const initialState = {
  route: 'signin',
  subRoute: 'mainPage',
  blogs: [],
  isSignedIn: false, 
  user: {
    id: '',
    email: '',
    name: '',
    joined: ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (userData) => {
    this.setState({
        user: {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          joined: userData.joined
        }
    });
  }

  onRouteChange = (route) => {
    if(route === 'home') {
      this.setState({isSignedIn: true});
      this.requestBlogs();
    }
    else {
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }

  onSubRouteChange = (subRoute) => {
    this.setState({subRoute: subRoute});
  }

  requestBlogs = () => {
    fetch(`http://localhost:3001/blog/${this.state.user.id}`)
    .then(response => response.json())
    .then(userBlogs => {
      this.setState({blogs: userBlogs});
    });
  }

  render() {
    return (
      <div>
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
          ? (this.state.subRoute === 'mainPage' 
              ? <MainPage onSubRouteChange={this.onSubRouteChange} name={this.state.user.name} blogs={this.state.blogs} /> 
              : <BlogForm requestBlogs={this.requestBlogs} userName={this.state.user.name} userId={this.state.user.id} onSubRouteChange={this.onSubRouteChange}/>)
          : (this.state.route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> 
            )
        }
      </div>
    );
  }
}

export default App;
