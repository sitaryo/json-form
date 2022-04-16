# json-form

Use json to build a form. Base on rc-filed-form.

## Sample

```bash
yarn init
yarn start
open http://localhost:3000
```

## Usage

```typescript
...
// create customized input which implements InputInterface
type InputType = React.ComponentProps<"input">;

class HtmlInput implements InputInterface<InputType> {
  name = "html-input";
  components = (props: InputType) => {
    const { value, ...rest } = props;
    return <input value={value || ""} {...rest} />;
  };
  createAttr = (p?: InputType) => createInputAttr(this.name, p);
}

...

```

```typescript
...
// init the Factory with customized input
initFactory([HtmlInput]);

// define data type
export interface User {
  firstName: string;
  lastName: string;
  age: number;
  birthday: string;
}

// create form json
const form: FormItemAttr<User>[] = [
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

function App() {
  const showData = (data: User) => {
    console.log("you get data with search button:\n", data);
  };

  const [userSearchForm] = Form.useForm<User>();
  const getDataOutside = () => {
    console.log(
      "you get data with form ref:\n",
      userSearchForm.getFieldsValue()
    );
  };

  return (
    <div className="App">
    	<SearchForm<User>
    		// use ref to access form instance
        form={userSearchForm}
				// get data use "onFinish"
        onFinish={showData}
        attributes={userSearchFormJson}
      />
      <div style={{ margin: 24 }}>
        <button onClick={getDataOutside}>GET DATA OUTSIDE FORM</button>
      </div>
    </div>
  );
}

...


```

## Todo list

- [ ] create default input
