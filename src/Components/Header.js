import React from "react";
import { ReactComponent as PatternCircle } from "../images/pattern-circles.svg";

function Header() {
  return (
    <>
      <div className="price-slider__header">
        <PatternCircle className="price-slider__pattern-circle" />
        <div className="price-slider__text">
          <h1 className="price-slider__title">Simple, traffic-based pricing</h1>
          <p className="price-slider__subtitle">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
