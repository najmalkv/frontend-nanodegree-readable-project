import React, { Component } from 'react';

// redux connect
import { connect } from 'react-redux'

// common helper functions
import { uuid } from '../utils/helpers'

// actions
import {
	 fetchPostById,
	 fetchComments,
	 fetchVotePostById,
	 fetchVoteCommentById,
	 fetchAddComment,
	 changeCommentsSortOrder,
	 fetchDeleteComment,
	 fetchDeletePost,
	 toggleCommentModal,
	 updateComment,
	 fetchEditComment
} from '../actions'



class PostDetailsView extends Component {



	componentWillMount(){

	 	// read id parameter from url
	 	this.id = this.props.location.match.params.id

	}

	componentWillReceiveProps(newProps) {


	  if(this.props.location.match.params.id !== newProps.location.match.params.id){
	     this.props.receivePost(newProps.location.match.params.id)
		 this.props.receiveComments(newProps.location.match.params.id)
	  }


	}

	componentDidMount() {

		 // actions for receiving posts and categories
		 this.props.receivePost(this.id)
		 this.props.receiveComments(this.id)

	}

	// function for handling adding a comment
	handleAddComment = () => {

		const body = {
			id: uuid(),
			timestamp: Date.now(),
			body: this.refs.body.value,
			author: this.refs.author.value,
			parentId: this.props.posts.post.id
		}

		// dispatch action for adding comment
		this.props.addComment(JSON.stringify(body))

		//reset
		this.refs.body.value = ''
		this.refs.author.value = ''

	}

	// function for handling editing a comment
	handleEditComment = () => {

	  const body = {

	    timestamp: Date.now(),
	    body: this.refs.editBody.value,

	  }

	  //dispatch action for editing a comment
	  this.props.editComment(this.props.comments.comment.id, JSON.stringify(body))

	  // reset the form
	  this.refs.body.value = ''

	  // close the edit comment modal
	  this.props.toggleCommentModal({}, false)

	  // redirect to post details page based on id
	  this.props.location.history.push(`/posts/${this.props.posts.post.category}/${this.props.posts.post.id}`)

	}

	render() {

		const {
			posts,
			comments,
			votePost,
			voteComment,
			changeSort,
			deleteComment,
			location,
			deletePost,
			toggleCommentModal,
			updateComment
		} = this.props

		switch (comments.sortBy) {
		    case 'vote-high-to-low':
		      comments.comments.sort((a, b) => (b.voteScore - a.voteScore))
		      break;
		    case 'vote-low-to-high':
		      comments.comments.sort((a, b) => (a.voteScore - b.voteScore))
		      break;
		    case 'time-high-to-low':
		      comments.comments.sort((a, b) => (b.timestamp - a.timestamp))
		      break;
		    case 'time-low-to-high':
		      comments.comments.sort((a, b) => (a.timestamp - b.timestamp))
		      break;
		    default:
          	  comments.comments.sort((a, b) => (b.voteScore - a.voteScore))
	  	}

	    return (

	      <section >

	       <header>

	         <span
		         className="back-arrow cursor-pointer"
		         onClick={() => location.history.goBack()}>
	          	&#8592;
	         </span>

	        	Post Details

				{ Object.keys(posts.post).length > 0 && <button
					 className="button-style pull-right"
					 onClick={() => {
					 	deletePost(posts.post.id)
					 	location.history.push('/')
					 }}>
					Delete Post
				</button>}

	        	{ Object.keys(posts.post).length > 0 && <button
		        	 className="button-style pull-right"
		        	 onClick={() => location.history.push('/edit-post/' + posts.post.id)}>
		        	 Edit Post
		        </button>}

	       </header>

	       { Object.keys(posts.post).length > 0 ? (<div className="container-fluid content">

	       	<div className="row">

	       		<div className="col-xs-2 text-center votes-cont">

					<div className="row">
						<div
							className="col-xs-12 cursor-pointer"
							onClick={() => votePost(posts.post.id, 'upVote')}>
							&#8679;
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<h4>{posts.post.voteScore}</h4>
						</div>
					</div>

					<div className="row">
						<div
							className="col-xs-12 cursor-pointer"
							onClick={() => votePost(posts.post.id, 'downVote')}>
							&#8681;
						</div>
					</div>

	       		</div>

	       		<div className="col-xs-10">

			        <div className="row">
			          <div className="col-xs-12 text-left">
						<h3>{posts.post.title}</h3>
			          </div>
			        </div>

			        <div className="row">
			          <div className="col-xs-12 text-left">
						<small>{posts.post.timestamp && new Date(posts.post.timestamp).toDateString()}</small>
			          </div>
			        </div>

			        <div className="row">
			          <div className="col-xs-12 text-right">
						<em>- {posts.post.author}</em>
			          </div>
		        	</div>

		          	<div className="row">
			          <div className="col-xs-12 text-left">
						<p>{posts.post.body}</p>
			          </div>
		        	</div>

	          	</div>
	        </div>

        	<div className="row">
	          <div className="col-xs-4 text-left">
				<h5>Comments ({comments.comments.length})</h5>
	          </div>
	          <div className="col-xs-8 text-right sort-by-cont">
		           Sort By :
		          <select onChange={(event) => changeSort(event.target.value)}>
		            <option value="vote-high-to-low">Votes high-to-low</option>
		            <option value="vote-low-to-high">Votes low-to-high</option>
		             <option value="time-high-to-low">Time high-to-low</option>
		            <option value="time-low-to-high">Time low-to-high</option>
		          </select>
		      </div>
        	</div>

        	{comments.comments.map((item, index) => (
        		<div key={index} className="row comments-cont">
					<div className="col-xs-2 text-center">

						<div className="row">
							<div className="col-xs-12 cursor-pointer" onClick={() => voteComment(item.id, 'upVote')}>
								&#8679;
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12">
								<h4>{item.voteScore}</h4>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12 cursor-pointer" onClick={() => voteComment(item.id, 'downVote')}>
								&#8681;
							</div>
						</div>

	       			</div>
		       		<div className="col-xs-10">

		       		    <div className="row">
				          <div className="col-xs-12 text-left comment-author">
							<em>Posted by {item.author}</em>
				          </div>
		        		</div>

				        <div className="row">
				          <div className="col-xs-12 text-left">
							<p>{item.body}</p>
				          </div>
			        	</div>

			        	<div className="row">
						  <div className="col-xs-12 text-right">
						  	<button
						  		className="button-style"
						  		onClick={() => toggleCommentModal(item,true)}>
						  		Edit
						  	</button>
							<button
								className="button-style"
								onClick={() => deleteComment(item.id)}>
								Delete
							</button>
						  </div>
			        	</div>

		          	</div>
        		</div>
        	))}

	        	 <div className="row">
		          <div className="col-xs-12 text-left">
					<h5>Add your Comment</h5>
		          </div>
	        	</div>

	        	<div className="row">
					<div className="col-xs-3 text-right">
						Name:
					</div>
					<div className="col-xs-9 text-left">
						<input type="text" ref="author" className="input-field"/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-3 text-right">
						Message:
					</div>
					<div className="col-xs-9 text-left">
						<textarea ref="body" cols="30" rows="5" className="input-field">

						</textarea>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 text-center">
						<button
							className="button-style"
							onClick={this.handleAddComment}>&#43;
							Add Comment
						</button>
					</div>
				</div>

	      </div>) : (

		  <div className="row">
			<div className="col-xs-12 text-center">
				<h3>Post Not found</h3>
			</div>
		  </div>

	      )}
			{ comments.isShowCommentModal &&
			<div className="edit-comment-modal-cont">
			 <div className="edit-comment-modal">

				<div className='subheader'>
			        Edit Comment
			        <span
			        	className="pull-right cursor-pointer"
			        	onClick={() => toggleCommentModal({}, false)}
			        	role="img"
			        	aria-label="close">
			        	&#x274E;
			        </span>
			    </div>

			    <div className="container-fluid edit-comment-form">

					<div className="row">
						<div className="col-xs-3 text-right">
							Message:
						</div>
						<div className="col-xs-9 text-left">
							<textarea ref="editBody" id="" cols="30" rows="5" className="input-field" value={comments.comment.body} onChange={(event)=> updateComment(comments.comment, 'body', event.target.value)}>

							</textarea>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 text-center">
							<button className="button-style" onClick={this.handleEditComment}>&#43; Save Comment</button>
						</div>
					</div>

			  </div>

			 </div>
			</div>}
	      </section>
	    );
	  }
}

function mapStateToProps ({ posts, comments }) {

  return {
    posts: posts,
    comments: comments
  }

}

function mapDispatchToProps (dispatch) {

  return {

     receivePost: (id) => dispatch(fetchPostById(id)),
     receiveComments: (id) => dispatch(fetchComments(id)),
     votePost: (id, option) => dispatch(fetchVotePostById(id,option)),
     voteComment: (id, option) => dispatch(fetchVoteCommentById(id,option)),
     addComment: (body) => dispatch(fetchAddComment(body)),
     changeSort: (sortBy) => dispatch(changeCommentsSortOrder(sortBy)),
     deletePost: (id) => dispatch(fetchDeletePost(id)),
     deleteComment: (id) => dispatch(fetchDeleteComment(id)),
     toggleCommentModal: (comment,isShow) => dispatch(toggleCommentModal(comment, isShow)),
     updateComment: (comment, field, value) => dispatch(updateComment(comment, field, value)),
     editComment: (id, body) => dispatch(fetchEditComment(id, body)),

  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsView);
