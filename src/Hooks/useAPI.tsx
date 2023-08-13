/** useAPI.tsx
 * input: resume, currentRole, targetRole,
 * output: isSuccess <null | boolean> representing login status
 *
 * hits /getResponse endpoint of API to create get response
 * from AI query
 *
 * use: [isSuccess, response] = useAPI
 * isSuccess: null if no attempt, false if failed, true if successful
 * response: a data stream of text sent from the server
 **/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { formProps } from "../Interfaces/formProps";

const api_url = import.meta.env.VITE_AI_API_URL;

export const useAPI = (): [
  React.Dispatch<formProps | null>,
  boolean | null,
  string | null
] => {
  const [response, setResponse] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [prompt, setPrompt] = useState<formProps | null>(null);

  useEffect(() => {
    if (
      !prompt ||
      !prompt.resume ||
      !prompt.currentRole ||
      !prompt.targetRole
    ) {
      return;
    }
    const { resume, currentRole, targetRole } = prompt;
    const formData = new FormData();
    formData.append("file", resume);
    formData.append("string", currentRole);
    formData.append("string", targetRole);

    axios
      .post(`${api_url}/getResponse`, formData, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        setIsSuccess(true);
        setResponse(data.data);
      })
      .catch((error) => {
        if (error.request.status === 500) {
          setIsSuccess(false);
          setResponse(error.response.data);
        } else {
          setIsSuccess(false);
          setResponse("Failed to connect to server.");
        }
      });
  }, [prompt]);

  return [setPrompt, isSuccess, response];
};
