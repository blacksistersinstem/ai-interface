import React, { useState } from "react";
import "./App.css";
import { LoginBox } from "./Views/LoginBox/LoginBox";
import { ResponseBox } from "./Views/ResponseBox/ResponseBox";

const App = () => {
  return (
    <>
      <div>hello world</div>
      <LoginBox />
      <ResponseBox />
    </>
  );
};

export default App;
