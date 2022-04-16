import { BaseInput } from "../index";

export const createInputAttr = <T>(
  inputType: string,
  attr?: T
): (BaseInput & T) | BaseInput => ({
  ...attr,
  inputType,
});
