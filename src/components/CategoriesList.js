import React from 'react'

//common helper functions
import { capitalize } from '../utils/helpers'

//link component from react router
import { Link } from 'react-router-dom';

export default function Categories ({ list }) {

  return (

    <div className='categories'>

      <div className='subheader'>
        Categories
      </div>

      <ul className="list">

        {list.map((item, index) => (

         <Link key={index} to={ '/posts/' + item.path}>

         	<li   className="item paper text-center">
           		 {capitalize(item.name)}
         	 </li>

          </Link>

        ))}

      </ul>
    </div>
  )
}