// displays response from ai readable stream as text
import React, { useEffect, useState } from "react";
import { useAPI } from "../../Hooks/useAPI";

export const ResponseBox = () => {
  const [isSuccess, response] = useAPI(new Blob(), "test", "test");  

  useEffect(() => {
    //
  }, [response]);

  return (
    <>
      <div>Response</div>
      <div>{response}</div>
      {isSuccess && <div>{response}</div>}
    </>
  );
};
