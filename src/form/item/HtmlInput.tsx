import InputInterface from "./input.interface";
import { createInputAttr } from "../util/InputAttrUtil";
import React from "react";

type InputType = React.ComponentProps<"input">;

class HtmlInput implements InputInterface<InputType> {
  name = "html-input";
  components = (props: InputType) => {
    return <input {...props} />;
  };
  createAttr = (p: InputType) => createInputAttr(this.name, p);
}

export default new HtmlInput();
