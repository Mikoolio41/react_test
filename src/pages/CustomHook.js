import { useToggle } from "../components/useToggle";
// useToggle custom hook

const CustomHook = () => {
  const [isVisible, toggle] = useToggle();

  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
};

export default CustomHook;
