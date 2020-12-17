import React from "react";
import { useObservableState } from "observable-hooks";
import { timer } from "rxjs";
import { switchMap, mapTo, startWith } from "rxjs/operators";
// 这个例子一个输入框监测其是否在输入，一段时间不输入后提示文字会改变
export const Observable2 = () => {
  const [isTyping, updateIsTyping] = useObservableState(
    (event$) =>
      event$.pipe(
        switchMap(() => timer(1000).pipe(mapTo(false), startWith(true)))
      ),
    false
  );
  return (
    <div>
      <input type="text" onKeyDown={() => updateIsTyping(true)} />
      <p>{isTyping ? "Good you are typing." : "Why stop typing?"}</p>
    </div>
  );
};
