import React from "react";
import Logo from "./troll-face.png";

export default function () {
  return (
    <div className="nav-bar">
      <div className="nav-items">
        <img className="nav-logo" src={Logo} alt="logo" />
        <h3>Meme Generator</h3>
      </div>
      <small className="nav-sub-title">A Meme Generating Website</small>
    </div>
  );
}
