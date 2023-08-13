import React, { useEffect, useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import "./LoginBox.css";
import { PopupModal } from "../PopupModal/PopupModal";
import { unmountComponentAtNode } from "react-dom";

interface LoginBoxProps {
  setAuthorized: React.Dispatch<boolean>;
}

export const LoginBox = ({ setAuthorized }: LoginBoxProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, message, setCredentials] = useLogin();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setAuthorized(true);
    }
  }, [isSuccess]);

  const handleClick = () => {
    setCredentials({ username, password });
    setShowPopup(true);
  };

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
          type="password"
        ></input>
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );

  return (
    <>
      {!isSuccess ? (
        <PopupModal
          message={message}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      ) : null}
      {loginPrompt}
    </>
  );
};
