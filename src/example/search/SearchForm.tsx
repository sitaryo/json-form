import React, { FormEvent } from "react";
import JsonForm from "../../lib/form/JsonForm";
import Form, { FormInstance } from "rc-field-form";
import "./search-form.css";
import { FormItemAttr } from "../../lib";

interface P<T> {
  attributes: (FormItemAttr<T> | undefined)[];
  onFinish?: (data: T) => void;
  onReset?: (data: FormEvent<HTMLFormElement>) => void;
  form?: FormInstance<T>;
}

const SearchForm = <T,>(props: P<T>) => {
  const { attributes, form, onFinish, onReset } = props;
  const [defaultForm] = Form.useForm<T>();
  const innerForm = form || defaultForm;

  const innerFinish = () => {
    innerForm.validateFields().then((values) => {
      onFinish && onFinish(values);
    });
  };

  const innerReset = (values: FormEvent<HTMLFormElement>) => {
    onReset ? onReset(values) : innerForm.resetFields();
  };

  return (
    <div className={"card"}>
      <JsonForm
        form={form}
        onFinish={innerFinish}
        onReset={innerReset}
        attributes={attributes}
        footer={
          <div className={"row"}>
            <button type={"reset"} style={{ marginRight: 12 }}>
              RESET
            </button>
            <button type={"submit"}>SEARCH</button>
          </div>
        }
        filedContainer={(child) => <div className={"container"}>{child}</div>}
        preItem={(decoration, fieldItem) => (
          <div className={"item"}>
            <span className="label">{decoration.label}</span>
            <div className="input">{fieldItem}</div>
          </div>
        )}
      />
    </div>
  );
};
export default SearchForm;
