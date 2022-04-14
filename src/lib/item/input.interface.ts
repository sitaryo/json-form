import { BaseInput } from "../input";
import React from "react";

export default interface InputInterface<P> {
  name: string;
  createAttr: (p: P) => (BaseInput & P) | BaseInput;
  components: React.FC<P>;
}
