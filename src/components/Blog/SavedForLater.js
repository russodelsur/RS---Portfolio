import React from "react";
import "../../pages/style.css";
import Saved from "../../pages/Saved.jsx";
  
const SavedPosts = () => {
// Get the list of saved items from localStorage
let savedItems = JSON.parse(localStorage.getItem("savedItems"))
console.log(savedItems)
if (savedItems === null) {
  savedItems = [];
}

  return (
    <div className="posts-container">
      {savedItems.map((post, index) => (
        <Saved key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default SavedPosts;