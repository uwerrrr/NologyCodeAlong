import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(true);

  useEffect(() => {
    console.log('Effect runs');
    document.title = `Count: ${count}`;
    return () => {
      document.title = 'Use Effect';
    };
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span onClick={() => setBool(!bool)}>{bool.toString()}</span>
    </div>
  );
};

export default Counter;
