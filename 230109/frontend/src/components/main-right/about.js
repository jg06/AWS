import React from "react";
import "./about.css";

const CLogo = require("../../logo/C++Logo.png");
const JavaLogo = require("../../logo/JavaLogo.png");
const PythonLogo = require("../../logo/PythonLogo.png");
const ReactLogo = require("../../logo/ReactLogo.png");
const JsLogo = require("../../logo/JsLogo.png");
const SqlLogo = require("../../logo/SqlLogo.png");
const NodeJSLogo = require("../../logo/NodeJSLogo.png");

export default function About() {
  return (
    <section id="about">
      <div id="About_main">
        <div className="About_Header">
          <span>About Me</span>
          <hr></hr>
        </div>
        <div className="PR">
          <p>
            이름: 김정겸
            <p></p>
            나이: 27 (1997/06/24)
            <p></p>
            거주지: 부산광역시 연제구
            <p></p>
            희망 직무: 백엔드 개발자
          </p>
        </div>
        <div></div>
        <div className="logo_temp">
          <img src={CLogo} alt="C++ Logo" className="C" />
          <span className="CP">C++</span>

          <img src={JavaLogo} alt="Java Logo" className="Java" />
          <span className="JavaP">Java</span>

          <img src={PythonLogo} alt="Python Logo" className="Python" />
          <span className="PythonP">Python</span>

          <img src={JsLogo} alt="Js Logo" className="JavaScript" />
          <span className="JavaScriptP">JavaScript (ES6+)</span>

          <img src={ReactLogo} alt="React Logo" className="React" />
          <span className="ReactP">React</span>

          <img src={NodeJSLogo} alt="NodeJS Logo" className="Nodejs" />
          <span className="NodejsP">Nodejs</span>

          <img src={SqlLogo} alt="SQL Logo" className="SQL" />
          <span className="SQLP">SQL</span>
        </div>
      </div>
    </section>
  );
}
