import React from 'react'
import { Link } from 'react-router-dom';

const HomeBlogContent = (blog) => {
  return (
    <div>
        <Link to={`${blog.id}`} className='title-link'> <h2 className='home-blog-title'>{blog.title}</h2> </Link>
        <p className='home-blog-date'>{blog.date}</p> 
    </div>
  )
}

export default HomeBlogContent