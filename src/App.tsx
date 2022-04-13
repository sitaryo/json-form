import React from "react";
import "./App.css";
import SearchForm from "./form/search/SearchForm";
import HtmlInput from "./form/item/HtmlInput";
import { initFactory } from "./form/item/base/InputFactory";
import { FormItemAttr } from "./form/input";

initFactory([HtmlInput]);

interface User {
  username: string;
}

const form: FormItemAttr<User>[] = [
  {
    formContext: {
      name: "username",
      label: "username",
    },
    input: HtmlInput.createAttr(),
  },
];

function App() {
  const showData = (data: User) => console.log(data);

  return (
    <div className="App">
      <SearchForm<User> onSubmit={showData} attributes={form} />
    </div>
  );
}

export default App;
