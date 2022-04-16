import React, { FormEvent } from "react";
import { GroupProps } from "../group";
import JsonForm from "../../lib/components/JsonForm";
import Form from "rc-field-form";
import "./search-form.css";

const SearchForm = <T,>(props: GroupProps<T>) => {
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
