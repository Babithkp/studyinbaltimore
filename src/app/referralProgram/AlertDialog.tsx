// components/AlertDialog.js
import Portal from './Portal';
import "./portal.css";

const AlertDialog = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event:any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div className={"overlay"} onClick={handleOverlayClick}>
        <div className={"dialog"}>
          <p>This is an alert dialog</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Portal>
  );
};

export default AlertDialog;
