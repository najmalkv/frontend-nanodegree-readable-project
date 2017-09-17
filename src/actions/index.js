import * as APIUtil from '../utils/api';

// export action names to be used in reducers
export const TOGGLE_SIDE_NAV = "TOGGLE_SIDE_NAV";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_COMMENTS_COUNT = "RECEIVE_COMMENTS_COUNT";
export const CHANGE_SORT_POSTS = "CHANGE_SORT_POSTS";
export const RECEIVE_POSTS_BY_CATEGORY = "RECEIVE_POSTS_BY_CATEGORY";
export const RECEIVE_POST_BY_ID = "RECEIVE_POST_BY_ID";
export const VOTE_POST_BY_ID = "VOTE_POST_BY_ID";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const CHANGE_SORT_COMMENTS = "CHANGE_SORT_COMMENTS";
export const VOTE_COMMENT_BY_ID = "VOTE_COMMENT_BY_ID";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const TOGGLE_COMMENT_MODAL = "TOGGLE_COMMENT_MODAL";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

// togle side nav
export const toggleSideNav = isShow => ({
  type: TOGGLE_SIDE_NAV,
  isShow
});

// get all categories
export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

// miidleware to fetch data from api
export const fetchCategories = () => dispatch => (
  APIUtil
      .fetchCategories()
      .then(categories => dispatch(receiveCategories(categories)))
);

// get all comments for all posts
export const receiveCommentsCount = (comments, post) => ({
  type: RECEIVE_COMMENTS_COUNT,
  comments,
  post
});

export const fetchCommentsCount = (id, post) => dispatch => (
  APIUtil
      .fetchComments(id)
      .then(comments => dispatch(receiveCommentsCount(comments, post)))
);


// get all posts
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  APIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))

);

// change post sort order
export const changePostsSortOrder = sortBy => ({
  type: CHANGE_SORT_POSTS,
  sortBy
});

// get posts by category
export const receivePostsByCategory = posts => ({
  type: RECEIVE_POSTS_BY_CATEGORY,
  posts
});


export const fetchPostsByCategory = (category) => dispatch => (
  APIUtil
      .fetchPostsByCategory(category)
      .then(posts => dispatch(receivePostsByCategory(posts)))
);

// get post by id
export const receivePostById = post => ({
  type: RECEIVE_POST_BY_ID,
  post
});

export const fetchPostById = (id) => dispatch => (
  APIUtil
      .fetchPostById(id)
      .then(post => dispatch(receivePostById(post)))
);

// vote on post
export const votePostById = post => ({
  type: VOTE_POST_BY_ID,
  post
});

export const fetchVotePostById = (id, option) => dispatch => (
  APIUtil
      .fetchVotePostById(id, option)
      .then(post => dispatch(votePostById(post)))
);

// create a new post
export const addPost = post => ({
  type: ADD_POST,
  post
});

export const fetchAddPost= (body) => dispatch => (
  APIUtil
      .fetchAddPost(body)
      .then(post => dispatch(addPost(post)))
);

// update post in store
export const updatePost = (post, field, value) => ({
  type: UPDATE_POST,
  post,
  field,
  value
});

// edit post
export const editPost = post => ({
  type: EDIT_POST,
  post
});

export const fetchEditPost= (id, body) => dispatch => (
  APIUtil
      .fetchEditPost(id, body)
      .then(post => dispatch(editPost(post)))
);

// delete a post
export const deletePost = post => ({
  type: DELETE_POST,
  post
});

export const fetchDeletePost = (id) => dispatch => (
  APIUtil
      .fetchDeletePost(id)
      .then(post => dispatch(deletePost(post)))
);

// get all comments for a post
export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = (id) => dispatch => (
  APIUtil
      .fetchComments(id)
      .then(comments => dispatch(receiveComments(comments)))
);

// change comments sort order
export const changeCommentsSortOrder = sortBy => ({
  type: CHANGE_SORT_COMMENTS,
  sortBy
});

// vote on comment
export const voteCommentById = comment => ({
  type: VOTE_COMMENT_BY_ID,
  comment
});

export const fetchVoteCommentById = (id, option) => dispatch => (
  APIUtil
      .fetchVoteCommentById(id, option)
      .then(comment => dispatch(voteCommentById(comment)))
);

// add a comment
export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const fetchAddComment = (body) => dispatch => (
  APIUtil
      .fetchAddComment(body)
      .then(comment => dispatch(addComment(comment)))
);

// delete a comment
export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const fetchDeleteComment = (id) => dispatch => (
  APIUtil
      .fetchDeleteComment(id)
      .then(comment => dispatch(deleteComment(comment)))
);

// toggle comments modal and populate values
export const toggleCommentModal = (comment,isShow) => ({
  type: TOGGLE_COMMENT_MODAL,
  isShow,
  comment
});

// update comment in store
export const updateComment = (comment, field, value) => ({
  type: UPDATE_COMMENT,
  comment,
  field,
  value
});

// edit comment
export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
});

export const fetchEditComment= (id, body) => dispatch => (
  APIUtil
      .fetchEditComment(id, body)
      .then(comment => dispatch(editComment(comment)))
);
