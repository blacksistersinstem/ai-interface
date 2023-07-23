import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

import styles from "./GetStartedBox.module.scss";

interface GetStartedPromptProps {
  handleNext?: () => void;
}

export const GetStartedPrompt: React.FC<GetStartedPromptProps> = ({
  handleNext,
}) => {
  return (
    <>
      <section className={styles.container}>
        <h1>Find Your Dream Job</h1>
        <p>{`We'll start by answering a few questions`}</p>
        <div onClick={handleNext} className={styles.buttonContainer}>
          <button>
            <div className={styles.arrow}>
              <Arrow />
            </div>
            {`Let's Get Started`}
          </button>
        </div>
      </section>
    </>
  );
};
