import React from "react";
import "./App.css";
import { Rxjs4 } from "./components/Rxjs/Rxjs4";
import { Observable1 } from "./components/Observable/Observable1";
import { Observable2 } from "./components/Observable/Observable2";
import { CuseRef } from "./components/Hooks/CuseRef";
// import {Cimmer} from './components/Immer/Cimmer'
import { CMoveable } from "./components/Moveable/CMoveable";
import { CDate } from "./components/JavascriptOperate/CDate";
import { CuseMemo } from "./components/Hooks/CuseMemo";
import { CuseCallback } from "./components/Hooks/CuseCallback";

function App() {
  return (
    <div className="App">
      {/* <CuseRef /> */}
      {/* <CDate /> */}
      <CuseMemo />
      {/* <CuseCallback /> */}
      {/* <Observable1 /> */}
    </div>
  );
}

export default App;
