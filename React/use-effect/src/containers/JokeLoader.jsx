import React, { useEffect, useState } from 'react';
import { JokeList } from '../components/JokeList/JokeList';
import { getJokesBySearchTerm } from '../services/joke-services';

const JokeLoader = ({ searchTerm }) => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);
    setJokes([]);
    getJokesBySearchTerm(searchTerm)
      .then((jokes) => setJokes(jokes))
      .catch((error) => {
        console.error(error);
        // could send to logging service - could capture search term and any other things we want
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return (
    <>
      {loading && <p>...Loading</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && jokes.length > 0 && <JokeList jokes={jokes} />}
    </>
  );
};

export default JokeLoader;
