import React from "react";
import "./style.css";
import { Props } from "./types";

export const GradientReflectHover = (props: Props) => {
  return (
    <button
      className="GradientReflectHover"
      onClick={() => props.handleClick()}
    >
      btnjs
    </button>
  );
};
