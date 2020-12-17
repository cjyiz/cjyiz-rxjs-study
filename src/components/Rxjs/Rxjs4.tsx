import React, { FC } from "react";
import { fromEvent, Subject } from "rxjs";
import { take } from "rxjs/operators";
// 广播模式，多订阅的实现
const subject = new Subject();
const clicks$ = fromEvent(document, "click");
const cjyiz$ = clicks$.pipe(take(2));
// 将cjyiz$交给subject进行广播
cjyiz$.subscribe(subject);

// 多方订阅
const subs1$ = subject.subscribe((x: any) =>
  console.log("这是第一个", x.clientX)
);
const subs2$ = subject.subscribe((x: any) =>
  console.log("这是第二个", x.clientX)
);

export const Rxjs4: FC = () => {
  return (
    <>
      <div>多方订阅</div>
    </>
  );
};
