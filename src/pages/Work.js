import React from "react";
import "./style.css"

  export default function Work() {
    return(
      <div className="work">
        <ul className="worklist">
          <li><a href="https://sad-hermann-405b8a.netlify.app/" className="coffee" target={"blank"} id="workItem">My Coffee Marbella</a></li>
          <li><a href="https://m4lmaster.gatsbyjs.io/" target={"blank"} className="made" id="workItem">Made4Living - Design and property</a></li>
          <li><a href="https://inspiring-bassi-9062d6.netlify.app/" className="designbyruso" target={"blank"} id="workItem">Design by Russo Portfolio</a></li>
          {/* <li><a href="https://inspiring-bassi-9062d6.netlify.app/" className="list" target={"blank"} id="workItem">Weather App</a></li> */}
          <li><a href="https://russodelsur.github.io/Periodic-table/" className="periodic" target={"blank"} id="workItem">Periodic table</a></li>
          <li><a href="https://github.com/russodelsur/Employees-platform" className="employ" target={"blank"} id="workItem">Employees plataform, OPP exercise</a></li>
          <li><a href="https://russodelsur.github.io/Comment-Box-project/" className="comment" target={"blank"} id="workItem">Comment box, FAC exersice</a></li>
          <li><a href="https://inspiring-bassi-9062d6.netlify.app/web-design-branding-nforma" className="forma" target={"blank"} id="workItem">EnForma</a></li>
        </ul>
        <div id="saved-items">
            {/* Items will be populated here */}
        </div>
      </div>
    );
}