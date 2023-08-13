import React, { useEffect, useState } from "react";
import "./PopupModal.css";

interface PopupModalProps {
  message: string;
  setShowPopup: React.Dispatch<boolean>;
  showPopup: boolean;
}

export const PopupModal = ({
  message,
  setShowPopup,
  showPopup,
}: PopupModalProps) => {
  useEffect(() => {
    const id = setTimeout(() => setShowPopup(false), 1200);
    return () => clearTimeout(id);
  }, [showPopup]);

  const popup = (
    <div className="popup-container">
      <div>{message}</div>
    </div>
  );

  return showPopup && popup;
};
