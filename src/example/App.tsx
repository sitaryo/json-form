import React from "react";
import "./App.css";
import SearchForm from "../lib/components/search/SearchForm";
import HtmlInput from "../lib/core/item/HtmlInput";
import { initFactory } from "../lib/core/base/InputFactory";
import { FormItemAttr } from "../lib/core";

initFactory([HtmlInput]);

interface User {
  username: string;
}

const form: FormItemAttr<User>[] = [
  {
    decoration: {
      label: "username",
    },
    itemContext: {
      name: "username",
    },
    input: HtmlInput.createAttr(),
  },
];

function App() {
  const showData = (data: User) => console.log(data);

  return (
    <div className="App">
      <SearchForm<User> onFinish={showData} attributes={form} />
    </div>
  );
}

export default App;
