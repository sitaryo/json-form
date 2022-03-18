import { BaseInput } from "../input";

export const createInputAttr = <T>(
  inputType: string,
  attr?: T
): (BaseInput & T) | BaseInput => ({
  ...attr,
  inputType,
});
