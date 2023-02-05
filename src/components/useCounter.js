import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [state, setState] = useState(initialVal);

  const add = () => {
    setState((initial) => initial + 1);
  };
  const subtract = () => {
    setState((initial) => initial - 1);
  };

  const reset = () => {
    setState(0);
  };

  return [state, add, subtract, reset];
};
