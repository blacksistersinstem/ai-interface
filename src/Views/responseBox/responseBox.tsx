// displays response from ai readable stream as text
import { useEffect } from "react";
import { useAPI } from "../../Hooks/useAPI";

interface ResponseBoxProps {
  resume: Blob;
  currentRole: string;
  targetRole: string;
}

export const ResponseBox = ({ resume, currentRole, targetRole }: ResponseBoxProps) => {
  const [setPrompt, isSuccess, response] = useAPI();

  
  useEffect(() => {
    setPrompt({resume, currentRole, targetRole});
  }, []);
  
  return (
    <>
      <div>Response: {response}</div>
      {isSuccess && <div>{response}</div>}
    </>
  );
};
