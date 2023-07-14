import React, { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import './LoginBox.css';
import { PopupModal } from "../PopupModal/PopupModal";

export const LoginBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSuccess, message, setCredentials] = useLogin();

  const loginPrompt = (
    <>
      <div className="login-container">
        <div className="title">Login</div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <button onClick={() => setCredentials({ username, password })}>
          Submit
        </button>
      </div>
    </>
  );

  console.log(isSuccess)

  return  isSuccess == false ? loginPrompt : <PopupModal message={message}/>;
};
