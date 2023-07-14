// displays response from ai readable stream as text
import React, { useEffect, useState } from "react";
import { useAPI } from "../../Hooks/useAPI";

interface ResponseBoxProps {
  currentRole: string;
  targetRole: string;
}

export const ResponseBox = ({ currentRole, targetRole }: ResponseBoxProps) => {
  const [isSuccess, response] = useAPI(new Blob(), currentRole, targetRole);

  useEffect(() => {
    //
  }, [response]);

  return (
    <>
      <div>Response: {response}</div>
      {isSuccess && <div>{response}</div>}
    </>
  );
};
