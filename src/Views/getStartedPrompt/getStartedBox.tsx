import React, { useState } from "react";
import styles from "./GetStartedBox.module.scss";
import { Button } from "../../Components/Button/Button";

interface GetStartedPromptProps {
  handleNext?: () => void;
}

export const GetStartedPrompt: React.FC<GetStartedPromptProps> = ({
  handleNext
}) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles["question-box"]}>
          <h1>Find Your Dream Job</h1>
          <p>{`We'll start by answering a few questions`}</p>
          <Button text={`Let's get started`} onClick={handleNext} arrow/>
          </div>
      </section>
    </>
  );
};
