import React from 'react'
import { Link } from 'react-router-dom';

const Bloglist = ({blog}) => {
       
  return (
     <div >
            {blog.map((post) => (
                 <div className='blog-preview' key={post.id} >
                      <h2><span>الكاتب:</span>{post.author}</h2>
                      <h2> <span>العنوان:</span>{post.title}</h2>
                      <p><span>المحتوي:</span>
                      {post.body}</p>
               
                      <Link className='show_details'  to={`/BlogDetailes/${post.id}`}>     
                تفاصيل
                      </Link>
                 </div>
          
            ))}
            </div>
            );
}
export default Bloglist;