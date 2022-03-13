import React from "react";
import "./style.css";
import { Props } from "./types";

export const RoundCorneredButton = (props: Props) => {
  return (
    <div className="RoundCorneredButton" onClick={() => props.handleClick()}>
      <div
        className="button -regular center"
        style={{
          backgroundColor: "grey",
        }}
      >
        📱
      </div>
    </div>
  );
};
