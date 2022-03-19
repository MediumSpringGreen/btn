import React from "react";
import "./style.css";
import { Props } from "./types";

export const FillFromCenterOnHoverButton = (props: Props) => {
  return (
    <button className="FillFromCenterOnHoverButton" onClick={props.handleClick}>Btnjs</button>
  );
};
