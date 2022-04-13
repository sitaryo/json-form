# json-form

Use json to build a form. Base on rc-filed-form.

## Sample

```bash
yarn init
yarn start
```

## Usage

```typescript
// create customized input which implements InputInterface
import InputInterface from "./input.interface";
import { createInputAttr } from "../util/InputAttrUtil";
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

```

```typescript
import React from "react";
import "./App.css";
import SearchForm from "./form/search/SearchForm";
import HtmlInput from "./form/item/HtmlInput";
import { initFactory } from "./form/item/base/InputFactory";
import { FormItemAttr } from "./form/input";

// init the Factory with customized input
initFactory([HtmlInput]);

// define data type
interface User {
  username: string;
}

// create form json
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


```

## Todo list

- [ ] add default style
- [ ] create default input
- [ ] create add form
- [ ] support customized style
