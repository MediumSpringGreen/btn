import React from "react";
import "./style.css";
import { Props } from "./types";

export const ButtonGroup = (props: Props) => {
  return (
    <div className="ButtonGroup">
      <button className="Button End Left" onClick={() => props.handleClick()}>
        btnjs
      </button>
      <button className="Button" onClick={() => props.handleClick()}>
        btnjs
      </button>
      <button className="Button End Right" onClick={() => props.handleClick()}>
        btnjs
      </button>
    </div>
  );
};
