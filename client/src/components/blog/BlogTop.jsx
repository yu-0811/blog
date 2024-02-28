import React, { useState, useEffect } from 'react'
import { getBlog } from '../../api/getBlog'
import BlogContent from './BlogContent'
import { CategoryList } from './CategoryList'


const BlogTop = () => {
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
                <>
                    <div>
                        <h1 className='blog-top'>記事一覧</h1>
                    </div>
                    <div>
                    {blog.map( d => <BlogContent {...d}  /> )}
                    </div>
                </>
            }
            {/* <CategoryList /> */}
        </div>
    )

}

export default BlogTop