import React from "react";
import "./style.css";
const Saved = ({ post: { title, body,
imgUrl, author }, index }) => {
  return (  
    <div className="post-container" id={index}>
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post" />
      <p className="text">{body}</p>
      <div className="info">      
        <h4>Written by: {author}</h4>
      </div>
    </div>
  );
};
  
export default Saved;