import React, { useState } from "react";
import "./App.css";
import TempL from "./components/main-left/TempL";
import TempR from "./components/main-right/TempR";
import Mmenu from "./components/M_Button";

function App() {
  const [showMmenu, SetShowMmenu] = useState(false);
  function Click() {
    SetShowMmenu(!showMmenu);
  }

  return (
    <div className="temp">
      <Mmenu V={showMmenu} Click={Click}></Mmenu>
      <TempL Mtrue={showMmenu}></TempL>
      <TempR></TempR>
    </div>
  );
}
export default App;
