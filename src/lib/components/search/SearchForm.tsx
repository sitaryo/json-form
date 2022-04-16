import React, { FormEvent } from "react";
import { GroupProps } from "../group";
// import Form from "rc-field-form";
import FieldInput from "../../core/base/FieldInput";
import useForm from "../common/useForm";
import Form from "../common/Form";

const SearchForm = <T,>(props: GroupProps<T>) => {
  const { attributes, ...rest } = props;
  const { form, onFinish, onReset } = useForm(rest);

  return (
    <div className={"card"}>
      <Form
        form={form}
        onFinish={onFinish}
        onReset={onReset}
        attributes={attributes}
        footer={
          <div className={"row"}>
            <button type={"reset"} style={{ marginRight: 12 }}>
              重置
            </button>
            <button type={"submit"}>查询</button>
          </div>
        }
        filedContainer={(child) => <div className={"row"}>{child}</div>}
        preItem={(decoration, fieldItem) => (
          <div className={"row"}>{fieldItem}</div>
        )}
      />
    </div>
  );
};
export default SearchForm;
