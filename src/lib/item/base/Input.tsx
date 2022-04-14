import React from "react";
import { BaseInput } from "../../input";
import InputFactory from "./InputFactory";

const Input: React.FC<BaseInput> = (props: BaseInput) => {
  const { inputType, ...rest } = props;
  return (
    <React.Fragment>
      {InputFactory.get(inputType)?.call(InputFactory, rest as any)}
    </React.Fragment>
  );
};

export default Input;
