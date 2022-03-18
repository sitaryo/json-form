import { FormItemAttr } from "./input";
import { FormEvent } from "react";

/**
 * add：新增组件
 * search：检索组件
 */
export type GroupType = "add" | "search";

export interface GroupProps<T> {
  /**
   * 所有传入的属性
   */
  attributes: (FormItemAttr<T> | undefined)[];
  /**
   * 获取所有属性的值
   */
  getData?: (data: T) => void;
  onReset?: (data: FormEvent<HTMLFormElement>) => void;
  /**
   * 所有属性的值（直接传入对象即可）
   */
  value?: {};
  /**
   * label与输入框排列方式
   */
  // layout?: FormLayout;
  layout?: any;
  /**
   * 显示重置按钮
   */
  hiddenResetButton?: boolean;
  /**
   * 是否显示导入导出按钮
   */
  isHasImportAndExport?: boolean;
  /**
   * 是否显示搜索和重置按钮
   */
  noSearchAndReset?: boolean;
  /**
   * 重置按钮文字
   */
  resetText?: string;
  /**
   * 显示提交按钮
   */
  hiddenSubmitButton?: boolean;
  /**
   * 提交按钮文字
   */
  submitText?: string;

  /**
   * 提示语
   */
  tips?: string;

  /**
   * form hook，用于外部组件获取 form 的值
   */
  // form?: FormInstance<T>;
  form?: any;

  /**
   * 用于传递外部自定义的form表单值变化处理
   * @param changedValues
   * @param allValues
   */
  onValuesChangeHandle?: (changedValues: any, allValues: any) => void;

  preventDefault?: boolean;
}
