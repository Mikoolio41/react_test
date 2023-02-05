import { useToggle } from "../components/useToggle";
import { useCounter } from "../components/useCounter";
// useToggle custom hook

const CustomHook = () => {
  const [isVisible, toggle] = useToggle();
  const [counter, add, subtract, reset] = useCounter(0);

  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
      <h1>Counter Hook</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={reset}>Reset</button>
      <div>{counter}</div>
    </div>
  );
};

export default CustomHook;
