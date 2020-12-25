import React, { FC } from "react";

export const CDate: FC = () => {
  const date = new Date();
  const a = {
    value: date,
  };


  console.log("日期", date, a);
  const cjyiz = () => {
    const b = {
      value: new Date(),
    };
    console.log("一开始获取的事件", date);
    console.log("发出来的", b);
  };
  return (
    <>
      <div onClick={cjyiz}>你们不一样</div>
    </>
  );
};
