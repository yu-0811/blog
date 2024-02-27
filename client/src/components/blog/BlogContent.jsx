import React from 'react'
import { Link } from 'react-router-dom';

const BlogContent = (blog) => {
  return (
    <div>
        <Link to={`blog/${blog.id}`}> <h1>{blog.title}</h1> </Link>
        <p>{blog.date}</p> 
    </div>
  )
}

export default BlogContent