import { FormContext } from "./form";

export interface BaseInput {
  inputType: string;
}

export interface FormItemAttr<T> {
  formContext: FormContext<T>;
  input: BaseInput;
}
