import React, { useState } from "react";
import arrow from "../../logo/RA.png";
import "./Lbar.css";

const Lbar = () => {
  const [showWebList, SetShowWebList] = useState(false);
  const [showProjectsList, SetShowProjectsList] = useState(false);
  const [showNavList, SetShowNavList] = useState(true);
  const [activeNav, setActiveNav] = useState("#");
  const WebList = () => (
    <div className="WebList">
      <a href="https://jg06.github.io/project1/">
        <div>
          <p>- First Project</p>
        </div>
      </a>
      <a href="/">
        <div>
          <p>- Second Project</p>
        </div>
      </a>
      <a href="/">
        <div>
          <p>- Third Project</p>
        </div>
      </a>
      <a href="/">
        <div>
          <p>- Fourth Project</p>
        </div>
      </a>
    </div>
  );
  const NavList = () => (
    <div className="NavList">
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <div>
          <p>- About Me</p>
        </div>
      </a>
      <a
        href="#Resume"
        onClick={() => setActiveNav("#Resume")}
        className={activeNav === "#Resume" ? "active" : ""}
      >
        <div>
          <p>- Resume</p>
        </div>
      </a>
      <a
        href="#Contact"
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
      >
        <div>
          <p>- Contact</p>
        </div>
      </a>
    </div>
  );

  return (
    <section className="Lbar-wrapper">
      <div>
        <div className="Menu">
          <div
            onClick={() => {
              SetShowNavList(!showNavList);
            }}
          >
            <p className="Projects">
              <img
                src={arrow}
                alt="arrow"
                className={showNavList ? "show-menu" : "hide-menu"}
              />
              About
            </p>
          </div>
          {showNavList ? <NavList /> : null}
        </div>
        <div className="Menu">
          <div
            onClick={() => {
              SetShowProjectsList(!showProjectsList);
              SetShowWebList(false);
            }}
          >
            <p className="Projects">
              <img
                src={arrow}
                alt="arrow"
                className={showProjectsList ? "show-menu" : "hide-menu"}
              />
              Projects
            </p>
          </div>
          {showProjectsList ? (
            <>
              <div onClick={() => SetShowWebList(!showWebList)}>
                <p className="Web">
                  <img
                    src={arrow}
                    alt="arrow"
                    className={showWebList ? "show-menu" : "hide-menu"}
                  />
                  Web
                </p>
              </div>
              {showWebList ? <WebList /> : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Lbar;
