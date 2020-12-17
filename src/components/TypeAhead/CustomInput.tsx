import React, { FC } from "react";
import {
  useObservableCallback,
  useSubscription,
  pluckCurrentTargetValue,
} from "observable-hooks";

export interface InputProps {
  text: string;
  onChange: (text: string) => any;
}
export const CustomInput: FC<InputProps> = (props) => {
  const [onChange, textChange$] = useObservableCallback<
    string,
    React.FormEvent<HTMLInputElement>
  >(pluckCurrentTargetValue);
  //   取消订阅？？
  useSubscription(textChange$, props.onChange);
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="请输入"
        value={props.text}
        onChange={onChange}
      />
    </>
  );
};
