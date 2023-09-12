import { useEffect, useState } from "react";
import "./styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Inc = () => {
    setCount(count + 1);
  };
  const Dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    document.title= count;
  },);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
    </div>
  );
};
export default Counter;
