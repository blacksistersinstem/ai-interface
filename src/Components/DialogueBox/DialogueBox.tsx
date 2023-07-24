import React, { useState, useRef } from "react";
import style from "./DialogueBox.module.scss";
import { Button, ButtonSecondary, ButtonTertiary } from "../Button/Button";
import { PopupModal } from "../../Views/PopupModal/PopupModal";

interface DialogueBoxProps {
  questionNumber: number;
  handleNext?: () => void;
  handlePrev?: () => void;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  questionNumber,
  handleNext,
  handlePrev,
}) => {
  const [resume, setResume] = useState<Blob | null>(null);
  const [isWrongType, setIsWrongType] = useState(false);
  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [targetRole, setTargetRole] = useState<string | null>(null);
  const uploadRef = useRef<React.RefObject<HTMLElement | null>>(null);

  const uploadHandler = () => {
    uploadRef.current?.click();
  };

  const handleFile = (file: Blob) => {
    if (!file || file.type !== "application/pdf") {
      setIsWrongType(true);
      return;
    }
    setIsWrongType(false);
    setResume(file);
  };

  const createModal = (message: string) => {
    return <PopupModal message={message} />;
  };

  switch (questionNumber) {
    case 0:
      return (
        <section className={style.container}>
          <h1>Tell me about yourself</h1>
          <input
            onChange={(e) => setCurrentRole(e.target.value)}
            required
            placeholder="Current Role"
          ></input>
          <input
            onChange={(e) => setTargetRole(e.target.value)}
            required
            placeholder="Target Role"
          ></input>
          {currentRole && targetRole && (
            <Button onClick={handleNext} text={"Continue"} width="200px" />
          )}
          <ButtonTertiary
            onClick={handlePrev}
            text={"Go Back"}
            width="200px"
          />
        </section>
      );
    case 1:
      return (
        <section className={style.container}>
          <h1>{`Now let's take a look at your resume`}</h1>
          {resume ? (
            <ButtonSecondary
              onClick={uploadHandler}
              text={"Re-upload Resume"}
              width="200px"
            />
          ) : (
            <Button
              onClick={uploadHandler}
              text={"Upload Resume PDF"}
              width="200px"
            />
          )}

          <input
            type="file"
            id="file"
            onChange={(e) => handleFile(e.target.files[0])}
            ref={uploadRef}
            style={{ display: "none" }}
          />
          {resume && (
            <>
              <Button onClick={handleNext} text={"Submit!"} width="200px" />
              {createModal("Resume Uploaded!")}
            </>
          )}
          {isWrongType && createModal("Wrong file type selected!")}
          <ButtonTertiary
            onClick={handlePrev}
            text={"Go Back"}
            width="200px"
          />
        </section>
      );
  }
};
