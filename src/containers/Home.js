import React, { Component } from 'react';

// redux connect
import { connect } from 'react-redux'

//components
import CategoriesList from '../components/CategoriesList'
import Posts from '../components/Posts'

// actions
import {
  fetchCategories,
  fetchPosts,
  changePostsSortOrder
} from '../actions'


class Home extends Component {

  componentDidMount() {
    // actions to receive categories and posts
    this.props.receiveCategories()
    this.props.receivePosts()
  }

  render() {

    const {categories, posts, changeSort, location} = this.props

      switch (posts.sortBy) {
        case 'vote-high-to-low':
          posts.posts.sort((a, b) => (b.voteScore - a.voteScore))
          break;
        case 'vote-low-to-high':
          posts.posts.sort((a, b) => (a.voteScore - b.voteScore))
          break;
        case 'time-high-to-low':
          posts.posts.sort((a, b) => (b.timestamp - a.timestamp))
          break;
        case 'time-low-to-high':
          posts.posts.sort((a, b) => (a.timestamp - b.timestamp))
          break;
        default:
          posts.posts.sort((a, b) => (b.voteScore - a.voteScore))
      }



    return (

      <section >

       <header>
        Home
        <button
          className="button-style pull-right"
          onClick={() => location.history.push('/create-post')}>
          &#43; Create Post
        </button>
       </header>

      <div className="content">
        <div className="row">
          <div className="col-xs-12">
            <CategoriesList list={categories.categories}/>
          </div>
        </div>
        <div className="row subheader">
          <div className="col-xs-4 ">
             Posts
          </div>
          <div className="col-xs-8 text-right">
             Sort By :
            <select name="" id="" onChange={(event) => changeSort(event.target.value)}>
              <option value="vote-high-to-low">Votes high-to-low</option>
              <option value="vote-low-to-high">Votes low-to-high</option>
               <option value="time-high-to-low">Time high-to-low</option>
              <option value="time-low-to-high">Time low-to-high</option>
            </select>
          </div>
        </div>
         <div className="row">
          <div className="col-xs-12">
             <Posts location={location} posts={posts.posts}/>
          </div>
         </div>
         <div className="row">
            <div className="col-xs-12 text-center">

            </div>
          </div>
         </div>
      </section>
    );
    }
}

function mapStateToProps ({  categories, posts }) {

  return {
    categories: categories,
    posts: posts
  }

}

function mapDispatchToProps (dispatch) {

  return {
     receiveCategories: () => dispatch(fetchCategories()),
     receivePosts: () => dispatch(fetchPosts()),
     changeSort: (sortBy) => dispatch(changePostsSortOrder(sortBy)),
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
