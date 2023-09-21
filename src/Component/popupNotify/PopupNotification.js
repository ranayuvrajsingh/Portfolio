import React, { useEffect } from "react";
import "./PopupNotification.scss"; // Create a corresponding CSS file for styling

export default function PopupNotification({ message, onClose }) {
  useEffect(() => {
    // Set a timer to automatically close the popup after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    // Clear the timer when the component unmounts (cleanup)
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="popup-notification">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}></button>
        <p>{message}</p>
      </div>
    </div>
  );
}
