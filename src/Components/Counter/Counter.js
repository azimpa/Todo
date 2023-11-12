import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <p className="count-text">Count: {count}</p>
      <button className="increment-button" onClick={increment}>
        Increment
      </button>
      <button className="decrement-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;


