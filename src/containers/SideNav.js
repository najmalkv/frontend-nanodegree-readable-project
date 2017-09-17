import React, { Component } from 'react';

// redux connect
import { connect } from 'react-redux'

// material components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import SubHeader from 'material-ui/Subheader';

//link component from react router
import { Link } from 'react-router-dom';

// actions
import {
    toggleSideNav,
    fetchCategories,
    fetchPosts
  } from '../actions'


class SideNav extends Component {



componentDidMount() {

    // action to receive all categories
    this.props.receiveCategories()
    this.props.receivePosts()


}

render() {

  const {common, categories, posts, toggleSideNav} = this.props

    return (
       <Drawer
          docked={false}
          open={common.sideNavIsShow}
          onRequestChange={(isShow) => toggleSideNav(isShow)}
       >
          <Link to="/"><MenuItem onClick={() => toggleSideNav(false) }> Home </MenuItem></Link>

          <Divider />

          <Link to="/create-post"><MenuItem onClick={() => toggleSideNav(false) }> Create a Post </MenuItem></Link>

          <Divider />

          <SubHeader>Categories</SubHeader>

          {categories.categories.map((item, index) => (
            <Link key={index}  to={'/posts/' + item.path}>
             <MenuItem className="text-capitalize" onClick={() => toggleSideNav(false) }>
                {item.name}
             </MenuItem>
            </Link>
            ))}
           <Divider />
           <SubHeader>Posts</SubHeader>

            {posts.posts.filter((post) => post.deleted === false).map((item, index) => (
            <div key={index}>
            <Link   to={ '/posts/'+ item.category +'/' + item.id}>
             <MenuItem className="text-capitalize post-menu-item" onClick={() => toggleSideNav(false) }>
                {item.title}
             </MenuItem>
            </Link>
            <Divider />
            </div>
            ))}
        </Drawer>
    );
  }
}

function mapStateToProps ({  categories, common, posts }) {

  return {
    common: common,
    categories: categories,
    posts: posts
  }

}

function mapDispatchToProps (dispatch) {
  return {
     toggleSideNav: (isShow) => dispatch(toggleSideNav(isShow)),
     receiveCategories: () => dispatch(fetchCategories()),
     receivePosts: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);
