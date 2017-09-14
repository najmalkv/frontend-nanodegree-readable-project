import React, { Component } from 'react';

//React router module
import { Route } from 'react-router-dom';

// Common css file
import './App.css';

// twitter Boostrap css file
import './bootstrap.min.css';

//views
import Home from './containers/Home'
import CategoryView from './containers/CategoryView'
import PostDetailsView from './containers/PostDetailsView'
import PostForm from './containers/PostForm'

class App extends Component {

  render() {
      return (
        <div className="App">
          <Route exact path="/" render={(location) => (<Home location={location}/>)} />
          <Route exact path="/posts/:category" render={(location) => (<CategoryView location={location}/>)} />
          <Route exact path="/posts/:category/:id" render={(location) => (<PostDetailsView location={location}/>)} />
          <Route exact path="/create-post" render={(location) => (<PostForm location={location}/>)} />
          <Route exact path="/edit-post/:id" render={(location) => (<PostForm location={location}/>)} />
        </div>
      );
    }

}

export default App;
