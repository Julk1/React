import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2 className="header">Counter: {count}</h2>
      <button onClick={incrementCount}>Збільшити</button>
      <button onClick={decrementCount}>Зменшити</button>
    </div>
  );
}