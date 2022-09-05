import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const Create = () => {
  
  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [details, setDetails] = useState(" ");
  const [type, setType] = useState("technical");
  const [author, setAuthor] = useState(" ");
  const [isloading, setIsloading] = useState(true);
const history=useNavigate();
  const handelSubmite = (e) => { 
    e.preventDefault();
    console.log(title, body, author )
    const blog = { title, body, author,details,type };
    console.log(blog);
    setIsloading(true);
    fetch('http://localhost:8001/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(blog)

    }).then((response) => {
      setIsloading(false);
      history('/');
    })
 }
  return (
<div className="create">



<h2>أكتب مقال جديد</h2>
      <form onSubmit={ handelSubmite}>
      <label htmlFor="">العنوان</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}  />
        <label htmlFor="">نوع المقال</label>
        <select vlaue={type} onChange={(e)=>setType(e.target.value) }>
        <option value="technical">technical</option>
        <option value="Educational ">Educational </option>
        <option value="Health">Health</option>
        <option value="Sports ">Sports </option>
        <option value="Musical ">Musical </option>
        <option value="food">food</option>
        <option value="religious">religious</option>
        <option value="other">other</option>
        </select>


      <label htmlFor="">أسم الكاتب</label>
        <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value) } />
      <label htmlFor="">المحتوي</label>
        <textarea type="text" required value={body} onChange={(e)=>setBody(e.target.value) } />
      <label htmlFor="">التفاصيل</label>
        <textarea type="text" required value={details} onChange={(e)=>setDetails(e.target.value) } />
        
        
        <button>اضف المقال</button>
      </form>

</div>

  )
}

export default Create