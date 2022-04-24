import { Field } from "rc-field-form";
import React from "react";

export interface FormDecoration {
  /**
   * 描述
   */
  label?: string;
}

type RcFieldType = React.ComponentProps<typeof Field>;

export interface FormItemContext<T> extends RcFieldType {
  /**
   * 点击查询查询按钮后获得的对象，其中的key值就是该值（最好就是设置成对象中的key值）
   * ⚠️注意：在同一组InputAttribute中，该属性不能重复
   */
  name?: Extract<keyof T, string> | Extract<keyof T, string>[];
}

export interface BaseInput {
  inputType: string;
}

export interface FormItemAttr<T> {
  decoration: FormDecoration;
  itemContext: FormItemContext<T>;
  input: BaseInput;
}
