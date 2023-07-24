import React, { useState, useRef, Ref, useEffect } from "react";
import style from "./PromptBox.module.scss";
import { Button, ButtonSecondary, ButtonTertiary } from "../Button/Button";
import { PopupModal } from "../../Views/PopupModal/PopupModal";
import { useAPI } from "../../Hooks/useAPI";
import { formProps } from "../../Interfaces/formProps";

interface PromptBoxProps {
  form: formProps;
  promptNumber: number;
  submit: boolean;
}

export const PromptBox: React.FC<PromptBoxProps> = ({
  form,
  promptNumber,
  submit,
}) => {
  const [setPrompt, status, response] = useAPI();

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
        <section className={style.container}>
          {response ? response : null}
        </section>
      );
    case 1:
      return (
        <section className={style.container}>
          <h1>{`Now let's take a look at your resume`}</h1>
        </section>
      );
  }
};
