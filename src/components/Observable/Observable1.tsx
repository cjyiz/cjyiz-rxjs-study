import React, { FC, useState } from "react";
import { fromEvent, Subject } from "rxjs";
import { take } from "rxjs/operators";
import {useObservableState,useObservable} from 'observable-hooks'
// // 广播模式，多订阅的实现
// const subject = new Subject();
// const clicks$ = fromEvent(document, "click");
// const cjyiz$ = clicks$.pipe(take(2));
// // 将cjyiz$交给subject进行广播
// cjyiz$.subscribe(subject);

// // 多方订阅
// const subs1$ = subject.subscribe((x: any) =>
//   console.log("这是第一个", x.clientX)
// );
// const subs2$ = subject.subscribe((x: any) =>
//   console.log("这是第二个", x.clientX)
// );
 // 广播模式，多订阅的实现
 const subject = new Subject();
const clicks$ = fromEvent(document, "click");

export const Observable1: FC = () => {
  const [count, setCount] = useState(0);
  console.log(`执行${count}次`);
 
  const cjyiz$ = useObservable(
    ()=> clicks$.pipe(take(2))
  );
  // 将cjyiz$交给subject进行广播
  cjyiz$.subscribe(subject);

  // 多方订阅
  const subs1$ = subject.subscribe((x: any) =>
    console.log("这是第一个", x.clientX)
  );
  const subs2$ = subject.subscribe((x: any) =>
    console.log("这是第二个", x.clientX)
  );
  return (
    <>
      <div>多方订阅{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>
        点击我重新渲染
      </button>
    </>
  );
};
