import React, { PropsWithChildren } from "react";
import { FormItemAttr } from "../type";
import { Field as RcField } from "rc-field-form";
import InputFactory from "../InputFactory";

interface P<T> {
  attr: FormItemAttr<T>;
}

const emptyInput = <></>;

const FieldInput = <T,>(props: PropsWithChildren<P<T>>) => {
  const { itemContext, input } = props.attr;
  const { inputType, ...inputRest } = input;
  return (
    <RcField {...itemContext}>
      {InputFactory.get(inputType)?.call(InputFactory, inputRest as any) ||
        emptyInput}
    </RcField>
  );
};

export default FieldInput;
