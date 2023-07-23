import React, { useState } from "react";
import "./App.css";
import { LoginBox } from "./Views/LoginBox/LoginBox";
import { ResponseBox } from "./Views/ResponseBox/ResponseBox";
import { GetStartedPrompt } from "./Views/GetStartedPrompt/GetStartedBox";

const App = () => {
  return (
    <div className="App-container">
      <div className="nav">
        <h1>CareerCompass</h1>
      </div>
      <LoginBox />
      <GetStartedPrompt />
      {/* <ResponseBox /> */}
      <footer></footer>
    </div>
  );
};

export default App;
