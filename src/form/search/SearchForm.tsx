import React, { FormEvent } from "react";
import Input from "../item/base/Input";
import { GroupProps } from "../group";
import Form from "rc-field-form";
import Item from "../item/base/Item";

const SearchForm = <T,>(props: GroupProps<T>) => {
  const { attributes, form, onSubmit, onReset } = props;
  const [innerForm] = Form.useForm<T>();
  const searchForm = form || innerForm;

  const onFinish = () => {
    searchForm.validateFields().then((values) => {
      onSubmit && onSubmit(values);
    });
  };

  const innerReset = (values: FormEvent<HTMLFormElement>) => {
    onReset ? onReset(values) : searchForm.resetFields();
  };

  return (
    <div className={"card"}>
      <Form form={searchForm} onFinish={onFinish} onReset={innerReset}>
        <div className={"row"}>
          {attributes.map((item, index) => {
            return (
              !!item && (
                <Item {...item.formContext} key={`searchFormItem${index}`}>
                  <Input {...item.input} />
                </Item>
              )
            );
          })}
        </div>
        <div className={"row"}>
          <button type={"reset"} style={{ marginRight: 12 }}>
            重置
          </button>
          <button type={"submit"}>查询</button>
        </div>
      </Form>
    </div>
  );
};
export default SearchForm;
