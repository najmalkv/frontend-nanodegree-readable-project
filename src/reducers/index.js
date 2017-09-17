import { combineReducers } from 'redux'

import {

  TOGGLE_SIDE_NAV,
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS_COUNT,
  CHANGE_SORT_POSTS,
  RECEIVE_POSTS_BY_CATEGORY,
  RECEIVE_POST_BY_ID,
  VOTE_POST_BY_ID,
  ADD_POST,
  UPDATE_POST,
  EDIT_POST,
  DELETE_POST,
  RECEIVE_COMMENTS,
  CHANGE_SORT_COMMENTS,
  VOTE_COMMENT_BY_ID,
  ADD_COMMENT,
  DELETE_COMMENT,
  TOGGLE_COMMENT_MODAL,
  UPDATE_COMMENT,
  EDIT_COMMENT

} from '../actions'

function common (state={sideNavIsShow: false}, action) {
  switch (action.type) {
    case TOGGLE_SIDE_NAV :
      const { isShow } = action

      return {
        ...state,
        sideNavIsShow: isShow,
      }
    default :
      return state
  }
}

function categories (state = {categories: []}, action) {

  switch (action.type) {
    case RECEIVE_CATEGORIES :
      const { categories } = action

      return {
        ...state,
        categories: categories,
      }
    default :
      return state
  }
}

function posts (state = {posts: [], post:{}, filteredPosts: [], sortBy: 'vote-high-to-low'}, action) {

  const { posts, post, sortBy, field, value, comments } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        ...state,
        posts: posts,
      }
	 case RECEIVE_COMMENTS_COUNT :
	  return {
	    ...state,
      filteredPosts: state.filteredPosts.map(item => item.id === post.id
        ? {...item , commentsCount: comments.length}
        : item
        ),
	    posts: state.posts.map(item => item.id === post.id
	    	? {...item , commentsCount: comments.length}
	    	: item
        ),
	  }
     case CHANGE_SORT_POSTS :
     return {
        ...state,
        sortBy: sortBy,
      }
     case RECEIVE_POSTS_BY_CATEGORY :
      return {
        ...state,
        filteredPosts: posts,
      }
	 case RECEIVE_POST_BY_ID :
	  return {
	    ...state,
	    post: post,
	  }
	 case VOTE_POST_BY_ID :
	  return {
	    ...state,
      filteredPosts: state.filteredPosts.map(item => item.id === post.id
        ? post
        : item
        ),
	    posts: state.posts.map(item => item.id === post.id
	    	? post
	    	: item
        ),
	    post: post,
	  }
	 case ADD_POST :
	  return {
	    ...state,
	    posts: [...state.posts, post],
	  }
	 case UPDATE_POST :
	  return {
	    ...state,
	    post: {...state.post, [field]: value}
	  }
	 case EDIT_POST :
	  return {
	    ...state,
	    posts: state.posts.map(item => item.id === post.id
	    	? post
	    	: item
        )
	  }
	 case DELETE_POST :
	  return {
	    ...state,
	    posts: state.posts.filter(item => item.id !== post.id)
	  }
    default :

      return state
  }
}

function comments (state = {comments: [], comment: {} , sortBy: 'vote-high-to-low', isShowCommentModal: false}, action) {

  const { comments, comment, sortBy , isShow, field, value} = action


  switch (action.type) {

    case RECEIVE_COMMENTS :
      return {
        ...state,
        comments: comments,
      }
    case CHANGE_SORT_COMMENTS :
     return {
        ...state,
        sortBy: sortBy,
      }
    case VOTE_COMMENT_BY_ID :
	  return {
	    ...state,
	    comments: state.comments.map(item => item.id === comment.id
	    	? comment
	    	: item
        )
	  }
	 case ADD_COMMENT :
	  return {
	    ...state,
	    comments: [...state.comments, comment],
	  }
	 case DELETE_COMMENT :
	  return {
	    ...state,
	    comments: state.comments.filter(item => item.id !== comment.id)
	  }
	 case TOGGLE_COMMENT_MODAL :
     return {
        ...state,
        comment: comment,
        isShowCommentModal: isShow,
      }
     case UPDATE_COMMENT :
	  return {
	    ...state,
	    comment: {...state.comment, [field]: value}

	  }
	case EDIT_COMMENT :
	  return {
	    ...state,
	    comments: state.comments.map(item => item.id === comment.id
	    	? comment
	    	: item
        )
	  }
    default :
      return state
  }

}

export default combineReducers({
 common,
 categories,
 posts,
 comments
})