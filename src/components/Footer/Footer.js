// My footer with my links below

import React from "react";
import "./style.css"


const d = new Date();
let year = d.getFullYear()

export default function Footer() {
    return(
      <footer className="footer">
        <ul className="social">
        <a href="https://github.com/russodelsur" target={"blank"}>Github</a>
        <a href="https://www.linkedin.com/in/ruslan-s-6206661ab/" target={"blank"}>Linkedin</a>
        <a href="mailto:mrsanakoev@gmail.com" target={"blank"}>Email</a>
        <a href="https://www.hyperiondev.com/portfolio/112999/" target={"blank"}>Bootcamp Portfolio</a>
        </ul>
        <button type="button">Click Me!</button>
        <p>Site by @Ruslan {year}</p>
      </footer>
    );
}