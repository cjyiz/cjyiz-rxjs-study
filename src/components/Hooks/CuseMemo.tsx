import React, { FC, useMemo, useState } from "react";
// 一般是在有大量计算的时候使用
export const CuseMemo: FC = () => {
  const countMemoValue = (a: string, b: string) => {
    console.log("计算出的value", a, b);
    return {
      name: a,
      age: b,
    };
  };
  const [name, setName] = useState("小红");
  const [age, setAge] = useState("半岁");
  const [count, setCount] = useState(0);
  console.log("useMemo执行外面");
  const memoizedValue = useMemo(() => {
    console.log("useMemo执行");
    return countMemoValue(name, age);
  }, [name, age]);
  const countClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <div>
        <h1>useMemo</h1>
        <div>名字:{memoizedValue.name}</div>
        <div>年龄:{memoizedValue.age}</div>
        <div>点击的次数:{count}</div>
        <div
          onClick={countClick}
          style={{ border: "1px solid red", height: "100px", width: "100px" }}
        >
          点击变化
        </div>

        <div
          onClick={() => {
            if (name === "小红") {
              setName("小白");
            } else {
              setName("小红");
            }
          }}
        >
          改变名字
        </div>
      </div>
    </>
  );
};
