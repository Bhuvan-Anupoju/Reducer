import React from "react";
import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const handleDrecement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleDrecement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
