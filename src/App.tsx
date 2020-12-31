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
import { CjCarousel } from "./components/Swiper/CjCarousel";
function App() {
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        你们好
      </div>
      <button
        className={
          "bg-blue-  500  px-4 py-1 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        点我
      </button>
      <p className="text-gray-500 font-medium">Product Engineer</p>
      <div
        style={{ backgroundColor: "#4040404", height: "100px", width: "100px" }}
      >
        背景快404040
      </div>
      <div
        style={{ backgroundColor: "#4040404", height: "100px", width: "100px" }}
      >
        背景快404040
      </div>
      <div
        style={{ backgroundColor: "#4040404", height: "100px", width: "100px" }}
      >
        背景快404040
      </div>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        Message
      </button>
    </div>
  );
}

export default App;
