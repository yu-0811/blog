import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogDetail } from '../../api/getBlog'
import { marked } from 'marked';
import { CategoryList } from './CategoryList';

const BlogDetail = () => {
  const initialState = {
    date: '',
    title: '', 
    content: '',
  };

  const [detail, setDetail] = useState(initialState)
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=>{
      getBlogDetail(id)
      .then(d => {
          setDetail(d)
          setLoading(false)
      })
      .catch(e => {
          throw new Error(e)
      })
  },[])
  
  return(
      <div>
          {loading ?
              <h1>loading....</h1>
              :
              <div>
                  <h1>{detail.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.date}`)}` }} className="detail-content"></div>
                  <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.content}`)}` }} className="detail-content"></div>
              </div>
          }
      </div>
    )
}

export default BlogDetail