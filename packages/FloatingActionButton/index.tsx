import React from "react";
import "./style.css";
import { Props } from "./types";

export const FloatingActionButton = (props: Props) => {
  return (
    <div className="FloatingActionButton" onClick={props.handleClick}></div>
  );
};
