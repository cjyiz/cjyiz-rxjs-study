import React, { FC } from "react";
import { fromEvent } from "rxjs";
import { filter, take } from "rxjs/operators";
// rxjs和react无关的
// 创建observable
const clicks$ = fromEvent(document, "click");

// 创建observer,这一步可以最直接写到订阅的回调中
const observer: any = { next: (x: MouseEvent) => console.log(x) };
// * ================================================================================

// 建立订阅,一般要具名，以便于后续操作，类似于定时器创建清除
// const subs$ = clicks$.subscribe(observer);
// 在订阅的时候可以使用`pipe`进行更多的数据操作
const subs = clicks$
  .pipe(
    filter((d: any) => d.clientX < 400),
    take(4)
  )
  .subscribe(observer);
// * ================================================================================

// 可以取消订阅
// subs$.unsubscribe();
export const Rxjs3: FC = () => {
  return (
    <>
      <div>sd</div>
    </>
  );
};
