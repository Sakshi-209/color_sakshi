import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // This will run whenever the count state changes
    console.log('Count updated:', count);
  }, [count]); // The effect will only run when the count state changes

  return (
    <div>
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
