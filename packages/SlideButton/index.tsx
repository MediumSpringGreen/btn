import React from "react";
import "./style.css";
import { Props } from "./types";

export const SlideButton = (props: Props) => {
  const [guard, setGuard] = React.useState(0);
  const [currentValue, setCurretnValue] = React.useState(0);

  function customMUp(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    if (e.target instanceof HTMLInputElement) {
      if (currentValue == 100) {
        if (guard < 75) {
          e.preventDefault();
          setCurretnValue(0);
          setGuard(0);
        } else {
          props.onDone();
        }
      } else {
        e.preventDefault();
        setCurretnValue(0);
        setGuard(0);
      }
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let v = parseInt(e.currentTarget.value);
    setCurretnValue(v);
    if (v == 75) {
      setGuard(v);
    }
  }

  return (
    <input
      type="range"
      className="SlideButton"
      min="0"
      max="100"
      step="25"
      value={currentValue}
      onMouseUp={customMUp}
      onChange={onChange}
    />
  );
};
