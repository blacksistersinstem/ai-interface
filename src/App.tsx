import React, { useState, useRef, MutableRefObject } from "react";
import "./App.css";
import { LoginBox } from "./Views/LoginBox/LoginBox";
import { ResponseBox } from "./Views/ResponseBox/ResponseBox";
import { GetStartedPrompt } from "./Views/GetStartedPrompt/GetStartedBox";
import { Survey } from './Components/Survey/Survey';
const App = () => {

  return (
    <>
    <div className="App-container">
      <div className="nav">
        <h1>CareerCompass</h1>
      </div>
      <LoginBox />
      <Survey>
        <GetStartedPrompt />
        <div>bye</div>
      </Survey>
      {/* <ResponseBox /> */}
      <footer></footer>
    </div>

    </>
  );
};

export default App;
