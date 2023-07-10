import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getMovieById,
  incrementWatchedById,
} from '../../services/movies-service';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieById(id)
      .then((movie) => setMovie(movie))
      .catch((err) => setError(err));
  }, []);

  const onButtonClick = () => {
    incrementWatchedById(id).then((data) => setMovie(data));
  };
  return (
    <>
      {movie && (
        <main>
          <h2>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <div>
            <span>Watched: {movie.watchCount}</span>{' '}
            <button onClick={onButtonClick}>+</button>
          </div>
          <img src={movie.image} alt={movie.title} style={{ width: '500px' }} />
          <p>Directed By: {movie.director} </p>
        </main>
      )}
      {error && <p>{error.message}</p>}
      <Link to={'/movies'}>Go Back</Link>
    </>
  );
};

export default MoviePage;
