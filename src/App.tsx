import React from "react";
import "./App.css";
import SearchForm from "./form/search/SearchForm";
import HtmlInput from "./form/item/HtmlInput";
import { initFactory } from "./form/item/base/InputFactory";

initFactory([HtmlInput]);

function App() {
  return (
    <div className="App">
      <SearchForm
        onSubmit={(data) => {
          console.log(data);
        }}
        attributes={[
          {
            formContext: {
              name: "a",
              label: "a",
            },
            input: HtmlInput.createAttr(),
          },
          {
            formContext: {
              name: "b",
              label: "b",
            },
            input: HtmlInput.createAttr(),
          },
        ]}
      />
    </div>
  );
}

export default App;
