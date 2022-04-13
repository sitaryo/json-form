import { FormItemAttr } from "./input";
import { FormEvent } from "react";
import { FormInstance } from "rc-field-form";

export interface GroupProps<T> {
  /**
   * 所有传入的属性
   */
  attributes: (FormItemAttr<T> | undefined)[];
  /**
   * 获取所有属性的值
   */
  onSubmit?: (data: T) => void;
  onReset?: (data: FormEvent<HTMLFormElement>) => void;
  /**
   * form hook，用于外部组件获取 form 的值
   */
  form?: FormInstance<T>;
}
