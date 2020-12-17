import React, { FC, useEffect, useLayoutEffect, useState } from "react";

export const CuseLayout: FC = () => {
  console.log("进入组件");
  const [count, setCount] = useState(0);
  //   useEffect是异步执行
  useEffect(() => {
    console.log("useEffect执行");
  });
  //   useLayoutEffect是同步执行,因此肯定正在useEffect之前执行
  //  一般DOM变更的操作建议放在useLayoutEffect中，因为这时候浏览器还没有重绘完成。
  // 如果用useEffect,会再次出发重绘，徒增性能负担
  useLayoutEffect(() => {
    console.log("useLayoutEffect执行");
  }, []);
  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          点击变化{count}
        </button>
      </div>
    </>
  );
};
