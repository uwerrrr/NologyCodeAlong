import styles from "./MovieList.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { getMovieSubscription } from "../../services/movies-service";

const LiveMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // live monitor to movie collection database
    // and set movies state
    const unsubFunc = getMovieSubscription(setMovies);
    return () => unsubFunc();
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
