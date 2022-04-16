import { BaseInput } from "../index";
import React from "react";

export default interface InputInterface<P> {
  // must unique
  name: string;
  createAttr: (p: P) => (BaseInput & P) | BaseInput;
  components: React.FC<P>;
}

export const createInputAttr = <T>(
  inputType: string,
  attr?: T
): (BaseInput & T) | BaseInput => ({
  ...attr,
  inputType,
});
