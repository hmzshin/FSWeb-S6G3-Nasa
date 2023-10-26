import { useState } from "react";
import "./Content.css";

function Content(props) {
  const { apodData } = props;

  return (
    <div className="bodyContainer">
      <button type="">geri git</button>
      <div className="content">
        <h1>{apodData.title}</h1>
        <input id="input" type="date"></input>
        <div className="imageContainer">
          <img src={apodData.url}></img>
        </div>
      </div>
      <button>ileri git</button>
    </div>
  );
}

export default Content;
