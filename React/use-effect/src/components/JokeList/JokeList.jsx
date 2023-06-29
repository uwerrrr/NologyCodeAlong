import React from 'react';

export const JokeList = ({ jokes }) => {
  return (
    <section>
      {jokes.map((jokeData) => (
        <p key={jokeData.id}>{jokeData.joke}</p>
      ))}
    </section>
  );
};
