import React, { Dispatch, useState, useRef, Ref, SetStateAction } from "react";
import style from "./DialogueBox.module.scss";
import { Button, ButtonSecondary, ButtonTertiary } from "../Button/Button";
import { PopupModal } from "../../Views/PopupModal/PopupModal";
import { useAPI } from "../../Hooks/useAPI";
import { formProps } from "../../Interfaces/formProps";
interface DialogueBoxProps {
  questionNumber: number;
  handleNext?: () => void;
  handlePrev?: () => void;
  setForm: Dispatch<SetStateAction<formProps>>;
  setSubmit: Dispatch<SetStateAction<boolean>>;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  questionNumber,
  handleNext,
  handlePrev,
  setForm,
  setSubmit,
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
    setForm((prev) => {
      return { ...prev, resume: file };
    });
  };

  const createModal = (message: string) => {
    return <PopupModal message={message} />;
  };

  const handleSubmit = () => {
    setSubmit(true);
    handleNext!();
  };

  const handleSubmitRoles = () => {
    setForm((prev) => {
      return { ...prev, currentRole, targetRole };
    });
    handleNext!();
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
            <Button
              onClick={handleSubmitRoles}
              text={"Continue"}
              width="200px"
            />
          )}
          <ButtonTertiary onClick={handlePrev} text={"Go Back"} width="200px" />
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
            ref={uploadRef}
            onChange={(e) => handleFile(e.target.files[0])}
            style={{ display: "none" }}
          />
          {resume && (
            <>
              <Button onClick={handleSubmit} text={"Submit!"} width="200px" />
              {createModal("Resume Uploaded!")}
            </>
          )}
          {isWrongType && createModal("Wrong file type selected!")}
          <ButtonTertiary onClick={handlePrev} text={"Go Back"} width="200px" />
        </section>
      );
  }
};
