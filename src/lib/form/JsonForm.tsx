import React, { PropsWithChildren, ReactElement } from "react";
import RcForm from "rc-field-form";
import { FormDecoration, FormItemAttr } from "../type";
import FieldInput from "./FieldInput";

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

const JsonForm = <T,>(props: PropsWithChildren<P<T>>) => {
  const { preItem, attributes, filedContainer, footer, ...rest } = props;

  const withPreItem = (attr: FormItemAttr<T>) => {
    const filedInput = <FieldInput attr={attr} />;
    return preItem ? preItem(attr.decoration, filedInput) : filedInput;
  };

  const fieldItems = (
    <React.Fragment>
      {attributes.map(
        (attr, index) =>
          attr && (
            <React.Fragment key={`searchFormItem${index}`}>
              {withPreItem(attr)}
            </React.Fragment>
          )
      )}
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
export default JsonForm;
