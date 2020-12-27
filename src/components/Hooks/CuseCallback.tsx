import React, { FC, useCallback, useState } from "react";
// 父组件重新渲染，避免让子组件重新渲染，可以使用useCallback
export const CuseCallback: FC = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const c1 = () => {
    console.log("没有callback", count, color);
  };
  // useCallback,依赖一旦变化，里面所有的依赖会同步成文件的当前这状态
  const c2 = useCallback(
    (color) => {
      console.log("用callback包裹", count, color);
    },
    [color]
  );
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  const changeColor = () => {
    setColor("blue");
  };
  console.log("真实的count", count);
  c1();
  c2(color);
  return (
    <>
      <div>useCallback</div>
      <button onClick={handleClick}>点击变化</button>
      <button onClick={changeColor}>点击变化</button>
    </>
  );
};
