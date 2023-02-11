// Progress bar function below

import React from "react";
import "./style.css"

  export default function Progress() {
    return(
      <div className="progress-bar-container">
        <label htmlFor="progress"> Loading...</label>
        <progress id="progress" value="0" max="100"></progress>
      </div>
    );
}