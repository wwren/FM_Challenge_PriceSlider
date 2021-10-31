import React, { useRef } from "react";
import "./Slider.css";

const MAX_SLIDER_VALUE = 36;
const MIN_SLIDER_VALUE = 1;

function Slider({ defaultPriceInput, setpriceInput }) {
  const slider = useRef();

  const handleInput = () => {
    setpriceInput(slider.current.value);
    if (slider.current) {
      let percentage = `${Math.round(
        (slider.current.value / MAX_SLIDER_VALUE) * 100
      )}%`;
      slider.current.style.background = `linear-gradient(to right, var(--full-slider-bar) ${percentage}, var(--empty-slider-bar) ${percentage})`;
    }
  };
  return (
    <>
      <input
        className="slider"
        type="range"
        min={MIN_SLIDER_VALUE.toString()}
        max={MAX_SLIDER_VALUE.toString()}
        value={defaultPriceInput}
        ref={slider}
        onInput={handleInput}
      ></input>
    </>
  );
}

export default Slider;
