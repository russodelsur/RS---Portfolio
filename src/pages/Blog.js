import React from "react";
import "./style.css"
import Posts from "../components/Blog/Posts";
  
// blog component that will be rendered in App.js

const Blog = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Blog 
      </h1>
      <Posts />
    </div>
  );
};
  
export default Blog;