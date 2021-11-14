import React, { useState, useEffect } from "react";
import Slider from "./Slider.js";
import Toggle from "./Toggle.js";
import useWindowDimensions from "./useWindowDimensions.js";
import "./SliderCalculator.css";

const DISCOUNT_PERCENTAGE = 0.25;

function SliderCalculator() {
  const [priceInput, setpriceInput] = useState("16.00");
  const [pageview, setpageview] = useState("10k");
  const [isYearBill, setisYearBill] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      console.log("priceInput", priceInput);
      let price = parseInt(priceInput);
      if (price < 8) {
        setpageview("0");
      } else if (price >= 8 && price < 12) {
        setpageview("10k");
      } else if (price >= 12 && price < 16) {
        setpageview("50k");
      } else if (price >= 16 && price < 24) {
        setpageview("100k");
      } else if (price >= 24 && price < 36) {
        setpageview("500k");
      } else {
        setpageview("1M");
      }
    }
    return () => {
      mounted = false;
    };
  }, [priceInput]);

  return (
    <>
      <div className="price-slider__card__number">
        <div className="price-slider__card__pageview">{pageview} PAGEVIEWS</div>
        <div className="price-slider__card__price--desktop" id="price-range">
          <span className="price-slider__card__price--bold">
            $
            {isYearBill
              ? (parseFloat(priceInput) * (1 - DISCOUNT_PERCENTAGE)).toFixed(2)
              : priceInput}
          </span>
          <span>/month</span>
        </div>
      </div>
      <Slider defaultPriceInput={priceInput} setpriceInput={setpriceInput} />
      <div className="price-slider__card__price--mobile">
        <span className="price-slider__card__price--bold">
          $
          {isYearBill
            ? (parseFloat(priceInput) * (1 - DISCOUNT_PERCENTAGE)).toFixed(2)
            : priceInput}
        </span>
        <span>/month</span>
      </div>
      <div className="price-slider__toggle-year-billing">
        <p>Monthly Biling</p>
        <Toggle isYearBill={isYearBill} setisYearBill={setisYearBill} />
        <p>Yearly Billing</p>
        <div className="price-slider__toggle__discount">
          {useWindowDimensions().width >= 540
            ? `${DISCOUNT_PERCENTAGE * 100}% discount`
            : `-${DISCOUNT_PERCENTAGE * 100}%`}
        </div>
      </div>
    </>
  );
}

export default SliderCalculator;
<Slider />;
