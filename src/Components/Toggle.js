import React, { useRef } from "react";
import "./Toggle.css";
function Toggle({ isYearBill, setisYearBill }) {
  const toggleBackground = useRef();
  const toggleButton = useRef();

  const handleToggleClick = () => {
    setisYearBill((prev) => !prev);
    // due to the delay
    if (!isYearBill) {
      toggleBackground.current.style.backgroundColor =
        "var(--slider-background)";
      toggleButton.current.style.left = "34px";
    } else {
      toggleBackground.current.style.backgroundColor =
        "var(--toggle-background)";
      toggleButton.current.style.left = "1px";
    }
  };

  return (
    <div className="toggle" onClick={handleToggleClick} ref={toggleBackground}>
      <div className="toggle__button" ref={toggleButton}></div>
    </div>
  );
}

export default Toggle;
