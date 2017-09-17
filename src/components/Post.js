import React, { Component } from 'react';

// redux connect
import { connect } from 'react-redux'

// link component from react router
import { Link } from 'react-router-dom';

// material components
import Divider from 'material-ui/Divider';


// actions
import {

	 fetchVotePostById,
	 fetchCommentsCount,
	 fetchDeletePost

} from '../actions'


class Post extends Component {



componentWillReceiveProps(nextProps) {

	if(nextProps.post.commentsCount === undefined)
     this.props.receiveCommentsCount(nextProps.post.id, nextProps.post)

}

 componentDidMount() {

 	this.props.receiveCommentsCount(this.props.post.id, this.props.post)

 }

 render() {

 const {post, votePost, deletePost, location, fetchPostById} = this.props


  return (


          <div className="row">

	       		<div className="col-xs-2 text-center votes-cont">

					<div className="row">
						<div
							className="col-xs-12 cursor-pointer"
							onClick={() => votePost(post.id, 'upVote')}>
							&#8679;
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<h4>{post.voteScore}</h4>
						</div>
					</div>

					<div className="row">
						<div
							className="col-xs-12 cursor-pointer"
							onClick={() => votePost(post.id, 'downVote')}>
							&#8681;
						</div>
					</div>

	       		</div>

	       		<div className="col-xs-10">
					<Link  to={ '/posts/'+ post.category +'/' + post.id}>
			        <div className="row">
			          <div className="col-xs-12 text-left">
						<h3>{post.title}</h3>
			          </div>
			        </div>

			        <div className="row">
			          <div className="col-xs-12 text-left">
						<small>{post.timestamp && new Date(post.timestamp).toDateString()}</small>
			          </div>
			        </div>

			        <div className="row">

			          <div className="col-xs-12 text-right">
						<em>- {post.author}</em>
			          </div>

		        	</div>
					</Link>
					<div className="row sort-by-cont">
						<div className="col-xs-4 text-left">
							<span>Comments({post.commentsCount})</span>
			          	</div>

						<div className="col-xs-8 text-right">

							<button
								 className="button-style pull-right"
								 onClick={() => {
								 	deletePost(post.id)
									window.location.reload();
								 	// location.history.push('/')
								 }}>
								Delete Post
							</button>

				        	<button
					        	 className="button-style pull-right"
					        	 onClick={() => location.history.push('/edit-post/' + post.id)}>
					        	 Edit Post
					        </button>

						</div>
					</div>
	          	</div>

	          	<div className="row">
					<div className="col-xs-12 post-divider">
	          			<Divider />
					</div>
	          	</div>

	        </div>

  )
 }
}

function mapStateToProps ({  comments}) {

  return {

    comments: comments
  }

}

function mapDispatchToProps (dispatch) {

  return {

     votePost: (id, option) => dispatch(fetchVotePostById(id,option)),
     receiveCommentsCount: (id, post) => dispatch(fetchCommentsCount(id, post)),
     deletePost: (id) => dispatch(fetchDeletePost(id))
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

