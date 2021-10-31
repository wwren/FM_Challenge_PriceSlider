import React from "react";
import TickText from "./TickText";
import "./TextBoard.css";

function TextBoard() {
  return (
    <div className="textboard">
      <TickText text={"Unlimited websites"} />
      <TickText text={"100% data ownership"} />
      <TickText text={"Email reports"} />
    </div>
  );
}

export default TextBoard;
