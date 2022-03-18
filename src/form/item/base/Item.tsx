import React, { PropsWithChildren } from "react";
import { FormContext } from "../../form";

const Item = <T,>(props: PropsWithChildren<FormContext<T>>) => {
  return (
    <div className={"item"}>
      <label className={"item-label"}>{props.label}</label>
      {props.children}
    </div>
  );
};

export default Item;
