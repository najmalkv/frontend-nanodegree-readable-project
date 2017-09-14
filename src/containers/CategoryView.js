import React, { Component } from 'react';

// redux connect
import { connect } from 'react-redux'

// common helper functions
import { capitalize } from '../utils/helpers'

// components
import Posts from '../components/Posts'

// actions
import {
    fetchPostsByCategory
  } from '../actions'


class CategoriesView extends Component {


componentWillMount(){

   // read category parameter from the url
   this.category = this.props.location.match.params.category

}

componentDidMount() {

    // action to receive posts based on category
    this.props.receivePosts(this.category)

}

render() {

  const {posts,location} = this.props

    return (
      <section >
       <header>
         <span className="back-arrow cursor-pointer" onClick={() => location.history.goBack()}>
          &#8592;
         </span>
         {capitalize(this.category)} Posts
       </header>
       <div className="content">
        <Posts list={posts.posts} title={this.category}/>
       </div>
      </section>
    );
  }
}

function mapStateToProps ({  posts }) {

  return {
    posts: posts
  }

}

function mapDispatchToProps (dispatch) {
  return {

     receivePosts: (category) => dispatch(fetchPostsByCategory(category)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesView);
