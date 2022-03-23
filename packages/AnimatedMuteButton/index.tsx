import React from "react";
import "./style.css";
import { Props } from "./types";

export const AnimatedMuteButton = (props: Props) => {
  return (
    <div
      className="AnimatedMuteButton sound-on"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.classList.toggle("sound-on");
        props.handleClick(
          e.currentTarget.classList.contains("sound-on") ? false : true
        );
      }}
    >
      <div className="first-bar bar"></div>
      <div className="second-bar bar">X</div>
      <div className="third-bar bar"></div>
    </div>
  );
};
