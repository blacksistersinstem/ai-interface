/** useLogin.tsx
 * input: username and password as strings
 * output: isSuccess <null | boolean> representing login status
 * hits /login endpoint of API to create an auth cookie used
 * validate auth to interact with AI interface
 **/

import React, { useState, useEffect } from "react";
import axios from "axios";

const api_url = import.meta.env.VITE_AI_API_URL;

interface Credentials {
  username: string;
  password: string;
}

export const useLogin = (): [
  boolean | null,
  string,
  React.Dispatch<React.SetStateAction<Credentials>>
] => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (!credentials.username || !credentials.password) return;

    axios
      .post(`${api_url}/login`, JSON.stringify(credentials), {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((data) => {
        setIsSuccess(true);
        setMessage("Login Successful!");
      })
      .catch((error) => {
        console.log(credentials);
        if (error.request.status === 500) {
          setIsSuccess(false);
          setMessage("Username and/or password incorrect. Please try again.");
        } else {
          setIsSuccess(false);
          setMessage("Failed to connect to server.");
        }
      });
  }, [credentials]);

  return [isSuccess, message, setCredentials];
};
