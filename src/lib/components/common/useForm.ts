import { GroupProps } from "../group";
import Form from "rc-field-form";
import { FormEvent } from "react";

type Props<T> = Omit<GroupProps<T>, "attributes">;

const useForm = <T>(props: Props<T>) => {
  const { form, onFinish, onReset, preFinish } = props;
  const [defaultForm] = Form.useForm<T>();
  const innerForm = form || defaultForm;

  const innerFinish = () => {
    innerForm.validateFields().then((values) => {
      preFinish && preFinish(values);
      onFinish && onFinish(values);
    });
  };

  const innerReset = (values: FormEvent<HTMLFormElement>) => {
    onReset ? onReset(values) : innerForm.resetFields();
  };

  return {
    form: innerForm,
    onFinish: innerFinish,
    onReset: innerReset,
  };
};
export default useForm;
