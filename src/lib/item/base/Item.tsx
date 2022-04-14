import React, { PropsWithChildren } from "react";
import { FormContext } from "../../form";
import { Field } from "rc-field-form";

const Item = <T,>(props: PropsWithChildren<FormContext<T>>) => {
  const { label, children, ...rest } = props;
  return (
    <React.Fragment>
      <label className={"item-label"}>{label}:</label>
      <Field {...rest}>{children}</Field>
    </React.Fragment>
  );
};

export default Item;
