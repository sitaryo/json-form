import InputInterface, { createInputAttr } from "./input.interface";
import React from "react";

type InputType = React.ComponentProps<"input">;

class HtmlInput implements InputInterface<InputType> {
  name = "html-input";
  components = (props: InputType) => {
    const { value, ...rest } = props;
    return <input value={value || ""} {...rest} />;
  };
  createAttr = (p?: InputType) => createInputAttr(this.name, p);
}

export default new HtmlInput();
