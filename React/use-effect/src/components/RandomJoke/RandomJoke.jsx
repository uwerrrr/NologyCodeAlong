import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../services/joke-services';

const RandomJoke = () => {
  const [jokeData, setJokeData] = useState(null);
  useEffect(() => {
    getRandomJoke()
      .then((data) => setJokeData(data))
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = () => {
    getRandomJoke()
      .then((data) => setJokeData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {jokeData && <p>{jokeData.joke}</p>}
      <button onClick={onButtonClick}>Refresh Joke</button>
    </div>
  );
};

export default RandomJoke;
