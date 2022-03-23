import React from "react";
import "./style.css";
import { Props } from "./types";

export const SimpleMuteButton = (props: Props) => {
  return (
    <div
      className="SimpleMuteButton"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.classList.toggle("maction");
        props.handleClick(
          e.currentTarget.classList.contains("maction") ? true : false
        );
      }}
    >
      <div className="speaker">
        <div id="mute" className="mute"></div>
        <span></span>
      </div>
    </div>
  );
};
