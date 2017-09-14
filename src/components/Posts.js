import React from 'react'

// link component from react router
import { Link } from 'react-router-dom';

export default function Posts ({ list, title }) {

  return (

    <div className='categories'>

      <ul className="list">

        {list.filter((post) => post.deleted === false).map((item, index) => (

          <Link key={index} to={ '/posts/'+ item.category +'/' + item.id}>

	           <li  key={index} className="item paper">
	            {item.title}
	          </li>

          </Link>

        ))}

        {list.length === 0 &&

          <li   className="item">
            No Posts
          </li>
      	}
      </ul>
    </div>
  )
}