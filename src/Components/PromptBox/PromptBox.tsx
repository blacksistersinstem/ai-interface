import React, { useState, useRef, Ref, useEffect } from "react";
import styles from "./PromptBox.module.scss";
import { Button, ButtonSecondary, ButtonTertiary } from "../Button/Button";
import { PopupModal } from "../../Views/PopupModal/PopupModal";
import { useAPI } from "../../Hooks/useAPI";
import { formProps } from "../../Interfaces/formProps";
import ClipLoader from "react-spinners/ClipLoader";

interface PromptBoxProps {
  form: formProps | null;
  promptNumber: number;
  submit: boolean;
}

export const PromptBox: React.FC<PromptBoxProps> = ({
  form,
  promptNumber,
  submit,
}) => {
  const [setPrompt, isSuccess, response] = useAPI();

  useEffect(() => {
    if (!submit) return;
    setPrompt(form);
  }, [submit, response]);

  if (!form || !form.resume || !form.currentRole || !form.targetRole) return;

  const createModal = (message: string) => {
    return <PopupModal message={message} />;
  };

  switch (promptNumber) {
    case 0:
      return (
        <section className={styles.container}>
          {response ? (
            <>
              <pre className={styles.response}>{response}</pre>
            </>
          ) : (
            <>
              <h3>Generating Response...</h3>
              <ClipLoader
                color="#2f2c99"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          )}
        </section>
      );
    case 1:
      return (
        <section className={styles.container}>
          <h1>{`Now let's take a look at your resume`}</h1>
        </section>
      );
  }
};
