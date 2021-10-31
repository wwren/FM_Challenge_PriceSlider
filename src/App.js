import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import SliderCalculator from "./Components/SliderCalculator.js";
import TextBoard from "./Components/TextBoard";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer.js";
function App() {
  return (
    <div className="price-slider__container">
      <Header />
      <div className="price-slider__card__wrapper">
        <div className="price-slider__card__top">
          <SliderCalculator />
        </div>
        <div className="price-slider__card__bottom">
          <div className="price-slider__card__bottom__left-panel">
            <TextBoard />
          </div>
          <div className="price-slider__card__bottom__right-panel">
            <CTA />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
