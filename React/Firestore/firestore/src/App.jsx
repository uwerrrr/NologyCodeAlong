import { useEffect, useState } from 'react';
import { getAllMovies } from './services/movies-service';
import MovieList from './components/MovieList/MovieList';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';
import LiveMovieList from './components/MovieList/LiveMovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((movieData) => setMovies(movieData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Firestore</h1>
      {/* <MovieList movies={movies} /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<p>Home page</p>} />
          <Route path='/movies' element={<LiveMovieList />} />
          <Route path='/movies/:id' element={<MoviePage />} />
          <Route path='/movies/new' element={<NewMovieForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
