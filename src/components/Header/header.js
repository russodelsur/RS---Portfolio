// Header funtion for react router dom

import React from "react";
import "./style.css"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" id="rs" className="rs">RS</Link>
          </li>
          <li>
            <Link to="/designwork" id="designwork">Design work</Link>
          </li>
          <li>
            <Link to="/work" id="work">Work</Link>
          </li>
          <li>
            <Link to="/blog" id="blog" >Blog</Link>
          </li>
          <li>
            <Link to="/saved" id="blog" >Saved</Link>
          </li>
          <li>
            <Link to="/about" id="about" >About</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;