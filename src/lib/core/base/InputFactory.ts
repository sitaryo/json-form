import React from "react";
import InputInterface from "../item/input.interface";

const InputFactory = new Map<string, React.FC<any>>();

export const initFactory = (inputs: InputInterface<any>[]) => {
  inputs.forEach((i) => InputFactory.set(i.name, i.components));
};

export default InputFactory;
