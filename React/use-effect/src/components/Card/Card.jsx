import { useEffect, useState } from 'react';

const Card = () => {
  const [isShown, setIsShown] = useState(true);
  const [count, setCount] = useState(0);
  // No dependency list. Will run every time the card is rendered or re-rendered
  useEffect(() => {
    console.log('Card rendered');
  });

  // Empty dependency list. Will only run when the component is mounted
  useEffect(() => {
    console.log('This will only log on first mount');
    // return value is a *function* that will run when the component unmounts/is removed from the DOM
    return () =>
      console.log('Cleanup function, component has been removed from DOM');
  }, []);

  // This will run on first mount/render and then only on changes to count
  useEffect(() => {
    console.log('This only runs when count changes');
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? 'Hide' : 'Show'}
      </button>
      {isShown && <p>I am a card</p>}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
};

export default Card;
