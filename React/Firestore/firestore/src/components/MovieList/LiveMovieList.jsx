import styles from './MovieList.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { getMovieSubscription } from '../../services/movies-service';

const LiveMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsub = getMovieSubscription(setMovies);
    return () => unsub();
  }, []);

  return (
    <section className={styles.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default LiveMovieList;
