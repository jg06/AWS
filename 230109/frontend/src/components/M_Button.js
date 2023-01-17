import React from "react";
import Menu from "../logo/menu.png";
import "./M_Button.css";

export default function Mmenu(props) {
  return (
    <div className="B_table">
      <div
        className="M_Button"
        onClick={() => {
          props.Click();
        }}
      >
        <p>
          <img
            src={Menu}
            alt="Menu"
            className={props.V ? "show-Mmenu" : "hide-Mmenu"}
          />
        </p>
      </div>
    </div>
  );
}
