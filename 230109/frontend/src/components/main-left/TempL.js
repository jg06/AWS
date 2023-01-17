import React from "react";
import Lbar from "./Lbar";
import "./TempL.css";

export default function TempL({ Mtrue }) {
  return (
    <main className={Mtrue ? "temp_ML" : "temp_L"}>
      <div className="temp_L_fixed">
        <div className="title">
          <a href="/">
            <span>Portfolio V 1.3</span>
          </a>
        </div>
        <Lbar />
        <section className="footer-wrapper"></section>
      </div>
    </main>
  );
}
