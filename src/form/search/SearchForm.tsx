import React from "react";
import Input from "../item/base/Input";
import { GroupProps } from "../group";
import Item from "../item/base/Item";

const SearchForm = <T,>(props: GroupProps<T>) => {
  const { attributes } = props;

  return (
    <div className={"card"}>
      <div>
        <div className={"row"}>
          {attributes.map((item, index) => {
            return (
              !!item && (
                <Item key={`searchFormItem${index}`} {...item.formContext}>
                  <Input {...item.input} />
                </Item>
              )
            );
          })}
        </div>
        <div className={"row"}>
          <button style={{ marginRight: 12 }}>重置</button>
          <button>查询</button>
        </div>
      </div>
    </div>
  );
};
export default SearchForm;
