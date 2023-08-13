import React, { Dispatch, useState, useRef, SetStateAction } from "react";
import style from "./DialogueBox.module.scss";
import { Button, ButtonSecondary, ButtonTertiary } from "../Button/Button";
import { PopupModal } from "../../Views/PopupModal/PopupModal";
import { formProps } from "../../Interfaces/formProps";
interface DialogueBoxProps {
  questionNumber: number;
  handleNext?: () => void;
  handlePrev?: () => void;
  setForm: Dispatch<SetStateAction<formProps | null>>;
  setSubmit?: Dispatch<SetStateAction<boolean>>;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  questionNumber,
  handleNext,
  handlePrev,
  setForm,
  setSubmit,
}) => {
  const [resume, setResume] = useState<Blob | null>(null);
  //const [isWrongType, setIsWrongType] = useState(false);
  const [currentRole, setCurrentRole] = useState<string | null>(null);
  const [targetRole, setTargetRole] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const uploadRef = useRef<HTMLInputElement | null>(null);

  const uploadHandler = () => {
    uploadRef.current?.click();
  };

  const handleFile = (file: Blob | null) => {
    if (!file) return;
    setShowPopup(true);
    // if (!file || file.type !== "application/pdf") {
    //   setIsWrongType(true);
    //   return;
    // }
    // setIsWrongType(false);
    setResume(file);
    setForm((prev: any) => {
      return { ...prev, resume: file };
    });
  };

  const handleSubmit = () => {
    if (setSubmit) {
      setSubmit(true);
    }
    setShowPopup(true);
    if (handleNext) {
      handleNext();
    }
  };

  const handleSubmitRoles = () => {
    setForm((prev: any) => {
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
          <PopupModal
            message={"Resume Uploaded!"}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
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
            onChange={(e) =>
              handleFile(e.target.files ? e.target.files[0] : null)
            }
            style={{ display: "none" }}
          />
          {resume && (
            <>
              <Button onClick={handleSubmit} text={"Submit!"} width="200px" />
            </>
          )}
          <ButtonTertiary onClick={handlePrev} text={"Go Back"} width="200px" />
        </section>
      );
  }
};
