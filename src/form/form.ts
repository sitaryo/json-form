import { Field } from "rc-field-form";

type FormItem = React.ComponentProps<typeof Field>;

export interface FormContext<T> extends FormItem {
  /**
   * 描述
   */
  label?: string;
  /**
   * 点击查询查询按钮后获得的对象，其中的key值就是该值（最好就是设置成对象中的key值）
   * ⚠️注意：在同一组InputAttribute中，该属性不能重复
   */
  name?: Extract<keyof T, string> | Extract<keyof T, string>[];
}
