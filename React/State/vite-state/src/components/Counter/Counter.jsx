import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onPlusClick = (event) => {
    setCount(count + 1);
  };

  const onMinusClick = () => {
    setCount(count - 1);
  };

  console.log('Rendered the counter component');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onMinusClick}>-</button>
      <button onClick={onPlusClick}>+</button>
    </div>
  );
};
