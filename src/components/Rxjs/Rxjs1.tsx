import React, { FC, useEffect,useState } from "react";
import { map, filter, tap, delay, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
//建立一个observable
const numbersList$ = from([1, 2, 3, 4, 5]);
// 建立一个observer，带`$`差异在哪里
const squareNumbersList$ = numbersList$.pipe(
  tap((_) => console.log("tap: ", new Date().getTime())),
  filter((val) => val > 2),
  map((val) => val * val),
  mergeMap((val) => from([val]).pipe(delay(1000 * val)))
);
export const Rxjs1: FC = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // 建立订阅，第一次渲染的时候执行
    const subscription = squareNumbersList$.subscribe((val) => {
      console.log("subscribe: ", new Date().getTime());
      setCurrentNumber(val);
    });

    return () => {
      // 取消订阅
      subscription.unsubscribe();
    };
  }, []);
  return (
    <>
      <div>current number: {currentNumber}</div>
    </>
  );
};
