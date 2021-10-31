import React from "react";
import { ReactComponent as Tick } from "../images/icon-check.svg";

function TickText({ text }) {
  return (
    <div className="tick-text">
      <Tick />
      {text}
    </div>
  );
}

export default TickText;
