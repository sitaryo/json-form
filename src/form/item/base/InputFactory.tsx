import React from "react";
import InputInterface from "../input.interface";

const InputFactory = new Map<string, React.FC<any>>();

export const initFactory = (intputs: InputInterface<any>[]) => {
  intputs.forEach((i) => {
    InputFactory.set(i.name, i.components);
  });
};

export default InputFactory;
