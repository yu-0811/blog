import React from 'react'
import * as marked from 'marked';

export const BlogCategory = (category) => {
    return(
        <div className="category-content">
            <h1 className="category-date">{category.date}</h1>
            <div dangerouslySetInnerHTML={{ __html: `${marked(`${category.content}`)}` }}></div>
        </div>
    )
    
}