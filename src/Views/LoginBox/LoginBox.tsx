import React, { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";

export const LoginBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSuccess, message, setCredentials] = useLogin();

  return (
    <>
      <div>Login</div>
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
      <div style={{ color: isSuccess ? "black" : "red" }}>{message}{document.cookie}</div>
    </>
  );
};
