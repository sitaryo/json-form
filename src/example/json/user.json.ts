import { FormItemAttr } from "../../lib";
import HtmlInput from "../../lib/inputs/HtmlInput";

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  birthday: string;
}

export const userSearchFormJson: FormItemAttr<User>[] = [
  {
    decoration: {
      label: "First name",
    },
    itemContext: {
      name: "firstName",
    },
    input: HtmlInput.createAttr(),
  },
  {
    decoration: {
      label: "Last name",
    },
    itemContext: {
      name: "lastName",
    },
    input: HtmlInput.createAttr(),
  },
  {
    decoration: {
      label: "Age",
    },
    itemContext: {
      name: "age",
    },
    input: HtmlInput.createAttr(),
  },
  {
    decoration: {
      label: "Birthday",
    },
    itemContext: {
      name: "birthday",
    },
    input: HtmlInput.createAttr(),
  },
];
