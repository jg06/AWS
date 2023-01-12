import React from "react";
import Header from "./Header";
import Time from "./Time";
import About from "./about";
import Resume from "./Resume";
import Scroll from "./scroll";
import Contact from "./contact";
import "./TempR.css";

export default function TempR() {
  return (
    <main className="temp_R">
      <Time />
      <section className="Main-wrapper">
        <Header />
        <About />
        <Resume />
        <Contact />
        <Scroll />
      </section>
    </main>
  );
}
