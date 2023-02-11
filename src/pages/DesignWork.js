import React from "react";
import "./style.css"

  export default function Designwork() {
    return(
      <div className="designwork">
          <h1>This section is under construction</h1>
            <fieldset>
              <legend>Please how to get notified</legend>
              <div>
                <input type="radio" id="email" name="email" value="email" checked />
                <label for="email">Email</label>
              </div>

              <div>
                <input type="radio" id="message" name="message" value="message" />
                <label for="message">Message</label>
              </div>

              <div>
                <input type="radio" id="mail" name="mail" value="mail" />
                <label for="mail">Mail</label>
              </div>
          </fieldset>
          <table>
            <tr>
              <th>Projects</th>
              <th>Year</th>
            </tr>
            <tr>
              <td>Battersea</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>180 Strand</td>
              <td>2019</td>
            </tr>
          </table>
      </div>
    );
}

// I learned about radio input here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio