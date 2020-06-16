import React, { Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import BlogForm from './Components/BlogForm/BlogForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <BlogForm />
      </div>
    );
  }
}

export default App;
