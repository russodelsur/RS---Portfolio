import React from "react";
import "../../pages/style.css";
import Post from "../../pages/Blog.jsx";
  
let blogPosts;
const Posts = () => {
  blogPosts = [
    {
      title: "Polkadot",
      body: `The protocol was created by the Ethereum co-founder Gavin Wood, Robert Havermeier and Peter Czaban, raising over $144.3 million in its Initial coin offering in October 2017. Another private sale in 2019 raised an additional $43 million. Gavin Wood is attributed in coining the term "Web3" in 2014. The white paper for Polkadot was published by Wood in 2016. The Web3 foundation was subsequently launched in 2017.
      Polkadot's initial block (the "genesis block") was released in May 2020.The DOT is its native token, and DOTs were released with the launch of the genesis block.`,
      author: "Wikipedia",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Polkadot_Logo.png/1920px-Polkadot_Logo.png",
    },
    {
      title: "VR technology ",
      body: `
      Virtual Reality (VR) technology has taken the world by storm in recent years. It’s been used in everything from gaming to medical applications, and has become a major part of our lives. But what exactly is it and how can it be used?
      
      VR is a type of computer-generated reality, allowing users to interact with virtual objects in a simulated environment. It’s created using a combination of hardware (such as headsets and motion controllers) and software, and can be used for a wide range of applications.
      `,
      author: "Ruslan Sanakoev",
      imgUrl:
        "https://www.springwise.com/wp-content/uploads/2018/08/Virtual_Reality_Tech_Explained_Springwise-2.jpg",
    },
    {
      title: "Threejs",
      body: `Three.js is an incredibly powerful and versatile open source JavaScript library for creating 3D graphics. It is a popular choice for web developers and game developers alike, and is the foundation for a variety of applications from virtual reality to gaming. With Three.js, developers can create interactive 3D applications and games with ease, utilizing features such as lighting, materials, textures, and cameras.`,
      author: "Ruslan Sanakoev",
      imgUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--pun864y0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nnhefki9f0bjdtgyt6sj.jpeg",
    },
    {
      title: "Ethereum",
      body: `
      Ethereum is an open source platform for building decentralized applications. It is a blockchain-based distributed computing platform with smart contract functionality.
      
      Ethereum has been described as a “world computer” due to its ability to run code on a distributed network of computers without the need for a centralized server. This makes it ideal for building applications that need to be secure and resistant to censorship or tampering.`, 
      author: "Ruslan Sanakoev",
      imgUrl:
        "https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg",
    },
  ];


// Get the list of saved items from localStorage
localStorage.setItem("myPosts", JSON.stringify(blogPosts));

let savedItems = [];

// Get a reference to the DOM elements
document.addEventListener('click', event => {
  const item = event.target.closest(".saveButton");
    if (item) {
        // Get the item to save
        savedItems = JSON.parse(localStorage.getItem("savedItems"))
        console.log(savedItems)
        if (savedItems === null) {
          savedItems = [];
        }
        let index = event.target.parentElement.parentElement.id;
        let postSaved = blogPosts[index];
        // Add the item to the list of saved items
        savedItems.push(postSaved);

        // Remove duplicates from array - local storage
        const cleanList = [...new Map(savedItems.map((m) => [m.title, m])).values()];
      
        // Save the updated list of saved items
        localStorage.setItem('savedItems', JSON.stringify(cleanList));
}})
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;