import React from "react";
import SearchForm from "./search/SearchForm";
import HtmlInput from "../lib/inputs/HtmlInput";
import { initFactory } from "../lib/InputFactory";
import { User, userSearchFormJson } from "./json/user.json";
import Form from "rc-field-form";

initFactory([HtmlInput]);

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
    <React.Fragment>
      <SearchForm<User>
        form={userSearchForm}
        onFinish={showData}
        attributes={userSearchFormJson}
      />
      <div style={{ margin: 24 }}>
        <button onClick={getDataOutside}>GET DATA OUTSIDE FORM</button>
      </div>
    </React.Fragment>
  );
}

export default App;
