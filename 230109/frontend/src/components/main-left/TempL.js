import React from "react";
import Lbar from "./Lbar";
import "./TempL.css";

export default function TempL() {
  return (
    <main className="temp_L">
      <div className="temp_L_fixed">
        <div className="title">
          <a href="/">
            <span>Portfolio V 1.0</span>
          </a>
        </div>
        <Lbar />
        <section className="footer-wrapper"></section>
      </div>
    </main>
  );
}
