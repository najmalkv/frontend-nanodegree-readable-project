import React, { Component } from 'react';

import Post from '../components/Post'


class Posts extends Component {

render() {

 const {posts,  location} = this.props


  return (

    <div className='container-fluid'>

        {posts.filter((post) => post.deleted === false).map((item, index) => (

			   <Post location={location} key={index} post={item}/>

        ))}

       {posts.length === 0 &&

          <div   className="item">
            No Posts
          </div>

      	}

    </div>
  )
 }
}




export default Posts;

