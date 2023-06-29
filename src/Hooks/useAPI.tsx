/** useAPI.tsx
 * input: resume, currentRole, previousRole,
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

const api_url = import.meta.env.VITE_AI_API_URL;

export const useAPI = (
  resume: Blob,
  currentRole: string,
  previousRole: string
) => {
  const [response, setResponse] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (!resume || !currentRole || !previousRole) return;

    axios
      .post(
        `${api_url}/getResponse`,
        JSON.stringify({ resume, currentRole, previousRole }),
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        setIsSuccess(true);
        setResponse(data.data.response);
      })
      .catch((error) => {
        if (error.request.status === 500) {
          setIsSuccess(false);
          setResponse(error.message);
        } else {
          setIsSuccess(false);
          setResponse("Failed to connect to server.");
        }
      });
  }, []);

  return [isSuccess, response];
};
