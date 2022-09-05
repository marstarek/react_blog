import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Bloglist from "./../bloglist/Bloglist";
import Gallary from "./../gallary/Gallary";
import Notfound from "../404/Notfound";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";
function Home(props) {
  const{data:blog,isloading,error}=useFetch('http://localhost:8001/blog')
  // npx  json-server --watch data/db.json --port 8001
  const [arttype, setArttype] = useState(false);
  return (
    <div className="home-container container">
<Gallary></Gallary>
      <div className="row row-cols-3 py-3">
        <div className="col">
        <label htmlFor="">نوع المقال</label>
        <select vlaue={arttype} onChange={(e)=>setArttype(e.target.value) }>
        <option value={false}>All</option>
        <option value="Educational ">Educational </option>
        <option value="technical">technical</option>
        <option value="Health">Health</option>
        <option value="Sports ">Sports </option>
        <option value="Musical ">Musical </option>
        <option value="food">food</option>
        <option value="religious">religious</option>
        </select>
        
        </div>
        <div className="col">
<Link to={`/create`}><h2>أكتب مقال جديد</h2>
</Link>
        </div>

      </div>
     
      {error && <div> <Notfound/> </div>}
      {isloading ? (
        <div style={{width:"fit-content",margin:" 0 auto","zIndex": "10000","marginTop": "220px"}}>
          <div className="spinner-border" style={{width:"5rem",height:"5rem"}} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : null}

      {blog && (

        <Bloglist blog={arttype?blog.filter((blog) => blog.type === arttype):blog} />)}

    </div>
  );
}

export default Home;
