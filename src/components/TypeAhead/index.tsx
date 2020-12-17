import React, { FC } from "react";
import { CustomInput } from "./CustomInput";
export const TypeAhead: FC = () => {
  const [text, updateText] = React.useState("");
  return (
    <section style={{ margin: 20 }}>
      <div>
        <CustomInput text={text} onChange={updateText} />
      </div>
    </section>
  );
};
