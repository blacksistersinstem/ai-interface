import React, { useEffect, useState } from "react";
import "./PopupModal.css";

interface PopupModalProps {
  message: string
}

export const PopupModal = ({ message }: PopupModalProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 1200);
  }, {});

  const popup = <div className="popup-container">
    <div>{message}</div>
    </div>;

  return show && popup;
};
