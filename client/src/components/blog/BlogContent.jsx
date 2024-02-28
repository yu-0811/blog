import React from 'react'
import { Link } from 'react-router-dom';

const BlogContent = (blog) => {
  return (
    <div>
        <Link to={`${blog.id}`} className='title-link'> <h2 className='blog-top-title'>{blog.title}</h2> </Link>
        <p className='blog-top-date'>{blog.date}</p> 
    </div>
  )
}

export default BlogContent