import React, { FC } from "react";

export const CDate: FC = () => {
 const date=new Date()
 const a={
     value:date
 }
 console.log('日期',date,a)

    return (
    <>
      <div></div>
    </>
  );
};
