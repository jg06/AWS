import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <div id="Header">
      <div className="Hi">
        <span>Hi, my name is</span>
      </div>
      <div className="Name">
        <span>JG06</span>
      </div>
      <button className="Button">
        <span>Check out my Projects !</span>
      </button>
    </div>
  );
}
