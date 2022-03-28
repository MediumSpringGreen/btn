import React, { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import "./style.css";
import { Props } from "./types";

enum StatesDiagram {
  BEFORE_CLICK,
  CLICKED_UNDO_SHOWN,
  SUBMIT_COMPLETE,
}

export function ButtonWithUndo(props: Props) {
  const [count, setCount] = useState(-1);
  const [stateDiagram, setStateDiagram] = useState<StatesDiagram>(
    StatesDiagram.BEFORE_CLICK
  );

  useInterval(() => {
    setCount(count - 1);
  }, 1000);

  return (
    <div
      className="ButtonWithUndo"
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        switch (stateDiagram) {
          case StatesDiagram.BEFORE_CLICK:
            event.currentTarget.classList.add("undo");
            setCount(3);
            setStateDiagram(StatesDiagram.CLICKED_UNDO_SHOWN);
            break;
          case StatesDiagram.CLICKED_UNDO_SHOWN:
            if (count >= 1) {
              event.currentTarget.classList.remove("undo");
              setStateDiagram(StatesDiagram.BEFORE_CLICK);
              setCount(-1);
            } else {
              setStateDiagram(StatesDiagram.SUBMIT_COMPLETE);
            }
            break;
          case StatesDiagram.SUBMIT_COMPLETE:
            break;
          default:
            break;
        }
        props.handleClick();
      }}
    >
      {count >= 1 && (
        <span>
          {count}
          <sub>s</sub>⎌
        </span>
      )}
      {count < 1 && stateDiagram === StatesDiagram.BEFORE_CLICK && (
        <span>Submit</span>
      )}
      {((count < 1 && stateDiagram === StatesDiagram.CLICKED_UNDO_SHOWN) ||
        stateDiagram == StatesDiagram.SUBMIT_COMPLETE) && (
        <FadeIn>
          <span>Submited ✅</span>
        </FadeIn>
      )}
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef<any>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
