import React, { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const onIncrementClick = () => {
    setCount(count + 1);
  };

  const onDecrementClick = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h3>
        Count - <span title='count'>{count}</span>
      </h3>
      <button data-testid='resetButton' onClick={() => setCount(0)}>
        Reset
      </button>
      <button data-testid='decreaseButton' onClick={onDecrementClick}>
        minus
      </button>
      <button data-testid='increaseButton' onClick={onIncrementClick}>
        plus
      </button>
    </div>
  );
};

export default Counter;
