import React from "react";
import "./App.css";
import SearchForm from "./form/search/SearchForm";
import { createInputAttr } from "./form/util/InputAttrUtil";

function App() {
  return (
    <div className="App">
      <SearchForm
        attributes={[
          {
            formContext: {
              label: "input",
            },
            input: createInputAttr<React.ComponentProps<"input">>("", {}),
          },
        ]}
      />
    </div>
  );
}

export default App;
