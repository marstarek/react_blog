import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./../../useFetch";
import { useNavigate } from "react-router-dom";
import Notfound from "../404/Notfound";

const BlogDetailes = () => {
  const history = useNavigate();

  let { id } = useParams();
  const handelClik = () => {
    fetch("http://localhost:8001/blog/" + blog.id, {
      method: "DELETE",
    }).then((response) => {
      history("/");
      console.log("title");
    });
  };

  let {
    data: blog,
    isloading,
    error,
  } = useFetch("http://localhost:8001/blog/" + id);
  return (
    <div className="blog-details container">
    {error && <div> <Notfound/> </div>}
    {isloading ? (
      <div style={{width:"fit-content",margin:" 0 auto","zIndex": "10000","marginTop": "220px"}}>
        <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : null}
      {blog && (
        <div className="blog-preview" key={blog.id}>
          <h2>
            <span>الكاتب:</span>
            {blog.author}
          </h2>
          <h2>
            {" "}
            <span>العنوان:</span>
            {blog.title}
          </h2>
          <p>
            <span>المحتوي: </span>
            {blog.body}
          </p>
          <p>
            <span>نوع المقال:</span>
            {blog.type}
          </p>
          <p>
            <span>تفاصيل المقال: </span>
            {blog.details}
          </p>

          <button className="show_details" onClick={handelClik}>
            حذف
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetailes;
