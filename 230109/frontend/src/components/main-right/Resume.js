import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="Resume">
      <div id="Resume_main">
        <div className="Resume_Header">
          <span>Resume</span>
          <hr></hr>
        </div>
        <div className="PR">
          <p>
            인제대학교 정보통신공학과 졸업 (2016~2022)
            <p></p>
            육군 제 17보병사단 102여단 통신중대 야전가설병 (2017~2019)
          </p>
        </div>
        <div className="Resume_Skill">
          <span>Skill</span>
          <hr></hr>
        </div>
        <div className="PR">
          <p>
            C++ (2020~) / Java (2022~) / Python (2022~) / JavaScript (2022~) /
            React (2022~) / Node.js (2022~) / SQL (2022~)
            <hr></hr>
            간단한 웹사이트 제작 및 알고리즘
            <hr></hr>
            음향기기 설치 및 유지보수
            <hr></hr>
            단자 같은 간단한 유선 설비
          </p>
        </div>
      </div>
    </section>
  );
}
