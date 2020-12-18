import React, { FC, useState, useRef, useLayoutEffect, useEffect } from "react";

export const CuseRef: FC = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const cRef = useRef(0);
  console.log("重新渲染了");
  useEffect(() => {
    // cRef.current = count;
    console.log("useEffect最新的嘛？", cRef.current, color, count);
  });
  useLayoutEffect(() => {
    console.log("useLayout最新的嘛？", cRef.current, color, count);
  });
  const handleClick = () => {
    //   这里记录的就是当前的count
    cRef.current = count;
    setCount((count) => count + 1);
    setColor("blue");
    console.log("事件内部", cRef.current, count);
  };
  //   cRef.current = count;
  console.log("外面结尾", cRef.current, count);

  return (
    <>
      <title>react useRef </title>
      <button className="btn" onClick={handleClick}>
        点击几次{count}
      </button>
    </>
  );
};
