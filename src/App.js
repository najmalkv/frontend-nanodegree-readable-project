import React, { Component } from 'react';

//React router module
import { Route, withRouter } from 'react-router-dom';

// redux connect
import { connect } from 'react-redux'

// Common css file
import './App.css';

// twitter Boostrap css file
import './bootstrap.min.css';

// views
import SideNav from './containers/SideNav'
import Home from './containers/Home'
import CategoryView from './containers/CategoryView'
import PostDetailsView from './containers/PostDetailsView'
import PostForm from './containers/PostForm'

// material ui theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// material ui components
import AppBar from 'material-ui/AppBar';


// actions
import {
    toggleSideNav
  } from './actions'


class App extends Component {



  render() {

    const {showSideNav} = this.props

      return (
        <MuiThemeProvider>
          <div className="App">
            <AppBar
              title="Readable Project"
              onLeftIconButtonTouchTap={() => showSideNav(true)}
            />
            <SideNav />
            <Route exact path="/" render={(location) => (<Home location={location}/>)} />
            <Route exact path="/posts/:category" render={(location) => (<CategoryView location={location}/>)} />
            <Route exact path="/posts/:category/:id" render={(location) => (<PostDetailsView location={location}/>)} />
            <Route exact path="/create-post" render={(location) => (<PostForm location={location}/>)} />
            <Route exact path="/edit-post/:id" render={(location) => (<PostForm location={location}/>)} />
          </div>
        </MuiThemeProvider>
      );
    }

}

function mapStateToProps ({ common }) {

  return {
    common: common
  }

}

function mapDispatchToProps (dispatch) {
  return {

     showSideNav: (isShow) => dispatch(toggleSideNav(isShow)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
