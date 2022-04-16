import React from "react";
import SearchForm from "./search/SearchForm";
import HtmlInput from "../lib/core/item/HtmlInput";
import { initFactory } from "../lib/core/base/InputFactory";
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
    <div>
      <SearchForm<User>
        form={userSearchForm}
        onFinish={showData}
        attributes={userSearchFormJson}
      />
      <div style={{ margin: 24 }}>
        <button onClick={getDataOutside}>GET DATA OUTSIDE FORM</button>
      </div>
    </div>
  );
}

export default App;
