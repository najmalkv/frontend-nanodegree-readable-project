import React, { Component } from 'react';

// redux connect
import { connect } from 'react-redux'

//common helper functions
import { capitalize, uuid } from '../utils/helpers'

// actions
import {
    fetchCategories,
    fetchAddPost,
    fetchPostById,
    fetchEditPost,
    updatePost
} from '../actions'


class PostForm extends Component {

  componentWillMount(){

   // read id parameter from the url
   this.id = this.props.location.match.params.id

  }

  componentDidMount() {

   // dispatch receive categories action
   this.props.receiveCategories()

   //
   if(!Object.keys(this.props.posts.post).length && this.id)
    this.props.receivePost(this.id)

  }

  // function that handles adding a comment
  handleAddComment = () => {

    const body = {
      id: uuid(),
      timestamp: Date.now(),
      title: this.refs.title.value,
      body: this.refs.body.value,
      author: this.refs.author.value,
      category: this.refs.category.value
    }

    //dispatch add post action
    this.props.addPost(JSON.stringify(body))

    // reset form
    this.refs.title.value = ''
    this.refs.body.value = ''
    this.refs.author.value = ''

    // redirect to home page
    this.props.location.history.push('/')

  }

  // function that handles editing a comment
  handleEditComment = () => {

    const body = {

      title: this.refs.title.value,
      body: this.refs.body.value,

    }

    // dispatch edit post action
    this.props.editPost(this.props.posts.post.id, JSON.stringify(body))

    // reset
    this.refs.title.value = ''
    this.refs.body.value = ''
    this.refs.author.value = ''

    // redirect to post detail page based on id
    this.props.location.history.push(`/posts/${this.props.posts.post.category}/${this.props.posts.post.id}`)

  }

  render() {

    const {categories, location, addPost, posts, updatePost} = this.props

      return (
        <section>
          <header>
           <span className="back-arrow cursor-pointer" onClick={() => location.history.goBack()}>
            &#8592;
           </span>
           {this.id? 'Edit' : 'Create a'} Post
         </header>
         <div className="post-form-cont container-fluid content">
          <div className="row">
            <div className="col-xs-3 text-right">
              Title:
            </div>
            <div className="col-xs-9 text-left">
              <textarea ref="title" id="" cols="30" rows="2"  className="input-field" value={this.id && posts.post.title} onChange={(event)=> updatePost(posts.post, 'title', event.target.value)}>

              </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3 text-right">
              body:
            </div>
            <div className="col-xs-9 text-left">
              <textarea ref="body" cols="30" rows="5" className="input-field" value={this.id && posts.post.body} onChange={(event)=> updatePost(posts.post, 'body', event.target.value)}>

              </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3 text-right">
              Author:
            </div>
            <div className="col-xs-9 text-left">
              <input type="text" ref="author" className="input-field" value={this.id && posts.post.author} readOnly={this.id}/>
            </div>
          </div>
          <div className="row">
           <div className="col-xs-3 text-right">
              Category:
            </div>
            <div className="col-xs-9 text-left">
              <select ref="category" value={this.id && posts.post.category} disabled={this.id}>
                {categories.categories.map((item,index)=> (<option key={index} value={item.name}>{capitalize(item.name)}</option>))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-right">
              <button className="button-style" onClick={this.id? this.handleEditComment : this.handleAddComment}>{this.id ? 'Save Post' : 'Add Post'}</button>
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
       receivePost: (id) => dispatch(fetchPostById(id)),
       addPost: (body) => dispatch(fetchAddPost(body)),
       editPost: (id, body) => dispatch(fetchEditPost(id, body)),
       updatePost: (post, field, value) => dispatch(updatePost(post, field, value)),

    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
