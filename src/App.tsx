import React, { useState, useRef, MutableRefObject } from "react";
import "./App.scss";
import { LoginBox } from "./Views/LoginBox/LoginBox";
import { ResponseBox } from "./Views/ResponseBox/ResponseBox";
import { GetStartedPrompt } from "./Views/GetStartedPrompt/GetStartedBox";
import { DialogueBox } from "./Components/DialogueBox/DialogueBox";
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
        <DialogueBox questionNumber={0}/>
        <DialogueBox questionNumber={1}/>
        <DialogueBox questionNumber={2}/>
      </Survey>
      {/* <ResponseBox /> */}
      <footer></footer>
    </div>

    </>
  );
};

export default App;
