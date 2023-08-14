/** useLogin.tsx
 * input: username and password as strings
 * output: isSuccess <null | boolean> representing login status
 *
 * hits /login endpoint of API to create an auth cookie used
 * validate auth to interact with AI interface
 *
 * use: [isSuccess, message, setCredentials] = useLogin
 * isSuccess: null if no attempt, false if failed, true if successful
 * message: a string sent from the server, may indicate success or error
 * setCredentials: function taking username and password strings as arguments and initiates login
 **/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ServerError } from "../Interfaces/ServerError";

// cors stuff
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// dev override for live server testing
// import.meta.env.VITE_AI_API_URL_DEVELOPMENT =
//   "https://career-coach-api.adaptable.app";

const api_url = import.meta.env.PROD
  ? import.meta.env.VITE_AI_API_URL_PRODUCTION
  : import.meta.env.VITE_AI_API_URL_DEVELOPMENT;

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
    axios
      .post(`${api_url}/login`, JSON.stringify(credentials), {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error: ServerError) => {
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
