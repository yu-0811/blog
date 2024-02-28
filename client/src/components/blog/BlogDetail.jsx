import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogDetail } from '../../api/getBlog'
import { marked } from 'marked';
import { Link } from 'react-router-dom';

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
                <div className='back-bottun'>
                    <Link to='/blog' className="back-link">一覧に戻る</Link>
                </div>
                <h1 className='detail-Title'>{detail.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.date}`)}` }} className="detail-date"></div>
                <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.content}`)}` }} className="detail-content"></div>
              </div>
          }
      </div>
    )
}

export default BlogDetail