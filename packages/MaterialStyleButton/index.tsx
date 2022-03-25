import React, { useState } from "react";
import "./style.css";
import { Props } from "./types";

export const MaterialStyleButton = (props: Props) => {
  const [startingPointX, setStartingPointX] = useState(0);
  const [startingPointY, setStartingPointY] = useState(0);
  const [cWidth, setCWidth] = useState(100);
  const [cHeight, setCHeight] = useState(100);

  function findABSPos(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setStartingPointX(
      Math.abs(e.pageX - e.currentTarget.getBoundingClientRect().x) - 10
    );
    setStartingPointY(
      Math.abs(e.pageY - e.currentTarget.getBoundingClientRect().y) - 10
    );
  }

  return (
    <div
      className="TactileFeedbackButton"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.handleClick();
        findABSPos(e);
        e.currentTarget.classList.add("mark-start");
      }}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.classList.remove("mark-start");
      }}
      onMouseUp={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // e.currentTarget.classList.remove("mark-start");
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setCWidth(e.currentTarget.offsetWidth);
        setCHeight(e.currentTarget.offsetHeight);
      }}
    >
      <div className="content">Btnjs</div>
      <div className="mark-cont">
        <svg id="mark" width={cWidth} height={cHeight}>
          <circle cx={startingPointX} cy={startingPointY} />
        </svg>
      </div>
    </div>
  );
};
