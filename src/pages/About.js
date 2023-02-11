import React from "react";
import "./style.css"

  export default function About() {

    // about page with contact form

    return(
      <div id="aboutDiv" className="aboutDiv">
          <h1>My name is Ruslan Sanakoev</h1>
          <h2>I am a creative developer and designer from Spain. </h2>
          <h2>I use the MERN stack to create web applications. </h2>
          <h2>I use Javascript, Typescript and Three.js to create interactive experiences.</h2>
          <h2>I am currently enrolled in HyperionDev Web Development bootcamp.</h2>
          <h2>Previously, I was an interior architect and designer for Soho House and Vonder.</h2>
          <h2>I am based in London</h2>

          <div className="container">
          <h1>Contact me</h1>

          <form className="form">
              <label for="firstName">First name</label>
              <input
                  type="text"
                  name="firstName"
                  className="firstName"
                  tabIndex="1"
              />
              <label for="lastName">Last name</label>
              <input
                  type="text"
                  name="lastName"
                  className="lastName"
                  tabIndex="2"
              />
              <label for="email">Email</label>
              <input
                  type="email"
                  name="email"
                  id="email"
                  className="email"
                  placeholder="example@business.com"
                  tabIndex="3"
              />
              <button type="submit" className="send">Send</button>
          </form>
          </div>
      </div>
    );
}