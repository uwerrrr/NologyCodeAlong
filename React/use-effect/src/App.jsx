import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Clock from './components/Clock/Clock';
import RandomJoke from './components/RandomJoke/RandomJoke';
import JokeLoader from './containers/JokeLoader';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  // const [showClock, setShowClock] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  return (
    <>
      {/* <button onClick={() => setShowClock(!showClock)}>
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>
      {showClock && <Clock />} */}
      {/* <RandomJoke /> */}
      <SearchBar handleSubmit={handleSearch} />
      <JokeLoader searchTerm={searchTerm} />
    </>
  );
}

export default App;
