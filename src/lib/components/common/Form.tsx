import React, { PropsWithChildren, ReactElement } from "react";
import RcForm from "rc-field-form";
import { FormDecoration, FormItemAttr } from "../../core";
import FieldInput from "../../core/base/FieldInput";

type RcFormProps = React.ComponentProps<typeof RcForm>;

interface P<T> extends RcFormProps {
  attributes: (FormItemAttr<T> | undefined)[];
  preItem?: (
    decoration: FormDecoration,
    fieldItem: ReactElement
  ) => ReactElement;
  filedContainer?: (context: ReactElement) => ReactElement;
  footer?: ReactElement;
}

const Form = <T,>(props: PropsWithChildren<P<T>>) => {
  const { preItem, attributes, filedContainer, footer, ...rest } = props;

  const withPreItem = (attr: FormItemAttr<T>, index: number) => {
    const filedInput = (
      <FieldInput attr={attr} key={`searchFormItem${index}`} />
    );
    return preItem ? preItem(attr.decoration, filedInput) : filedInput;
  };

  const fieldItems = (
    <React.Fragment>
      {attributes.map((attr, index) => attr && withPreItem(attr, index))}
    </React.Fragment>
  );

  const withFieldContext = (item: ReactElement) =>
    filedContainer ? filedContainer(item) : item;

  return (
    <RcForm {...rest}>
      {withFieldContext(fieldItems)}
      {footer}
    </RcForm>
  );
};

export default Form;
