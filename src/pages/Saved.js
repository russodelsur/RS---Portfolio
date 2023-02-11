import React from "react";
import "./style.css"
import SavedPosts from "../components/Blog/SavedForLater";
  
const SavedPage = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Saved blog posts 
      </h1>
      <SavedPosts />
    </div>
  );
};
  
export default SavedPage;