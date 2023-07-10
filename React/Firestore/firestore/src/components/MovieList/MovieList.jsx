import styles from './MovieList.module.scss';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <section className={styles.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MovieList;
