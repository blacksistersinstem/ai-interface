import React, { useState, useRef, MutableRefObject } from "react";
import "./App.scss";
import { LoginBox } from "./Views/LoginBox/LoginBox";
import { GetStartedPrompt } from "./Views/GetStartedPrompt/GetStartedBox";
import { DialogueBox } from "./Components/DialogueBox/DialogueBox";
import { Survey } from "./Components/Survey/Survey";
import { useAPI } from "./Hooks/useAPI";
import { formProps } from "./Interfaces/formProps";
import { PromptBox } from "./Components/PromptBox/PromptBox";

const App = () => {
  const [form, setForm] = useState<formProps | null>(null);
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <div className="App-container">
        <div className="nav">
          <h1>CareerCompass</h1>
        </div>
        <LoginBox />
        <Survey>
          <GetStartedPrompt />
          <DialogueBox questionNumber={0} setForm={setForm} />
          <DialogueBox
            questionNumber={1}
            setForm={setForm}
            setSubmit={setSubmit}
          />
          <PromptBox promptNumber={0} form={form} submit={submit} />
        </Survey>
        <footer></footer>
      </div>
    </>
  );
};

export default App;
