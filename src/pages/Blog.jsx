import React from "react";
import "./style.css";

// Post element with all html elements per card.

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
  return (  
    <div className="post-container" id={index}>
      <h1 className="heading">{title}</h1>
      <div className="image-container"><img className="image" src={imgUrl} alt="post" /></div>
      <p>{body}</p>
      <div className="info">      
        <h4>Written by: {author}</h4>
      </div>
      <div className="interactive">
      <button className="saveButton">Save for later</button>
      <form>      
        <h3>Leave a comment</h3>
        <input id="comment" placeholder="Type comment here"></input>
        <button id="like">Like</button>
      </form>
      </div>
    </div>
  );
};
  
export default Post;