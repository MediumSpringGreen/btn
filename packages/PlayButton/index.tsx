import React from "react";
import "./style.css";
import { Props } from "./types";

export const PlayButton = (props: Props) => {
  return (
    <div className="PlayButton" onClick={props.handleClick}>
      <svg width={60} height={60}>
        <polygon
          fill="none"
          stroke="#000"
          stroke-width="1"
          points="32,25 32,58 60,42"
        ></polygon>
      </svg>
    </div>
  );
};
