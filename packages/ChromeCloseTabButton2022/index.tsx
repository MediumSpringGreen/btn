import React from "react";
import "./style.css";
import { Props } from "./types";

export const ChromeCloseTabButton2022 = (props: Props) => {
  return (
    <div className="ChromeCloseTabButton2022" onClick={props.handleClick}>
      <svg viewBox="0 0 40 40">
        <path className="x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
      </svg>
    </div>
  );
};