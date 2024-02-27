import React, { useState, useEffect } from 'react'
import { getBlog } from '../api/getBlog'
import BlogContent from './blog/BlogContent'
import { CategoryList } from './blog/CategoryList'


const HomeBlog = () => {
    const initialState = {
      id: '',
      date: '',
      title: '', 
    }

    const[blog, setBlog] = useState(initialState);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        getBlog()
        .then(d => {
            setBlog(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    console.log(blog)

    return(
        <div>
            {
                loading ?
                <h1>loading...</h1>
                :
                <div>
                {blog.slice(0, 3).map( d => <BlogContent {...d}  /> )}
                </div>
            }
            {/* <CategoryList /> */}
        </div>
    )

}

export default HomeBlog