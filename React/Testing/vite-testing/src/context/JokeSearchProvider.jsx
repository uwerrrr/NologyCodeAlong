import { createContext, useState } from 'react';

export const JokeSearchContext = createContext(null);

const JokeSearchProvider = ({ children }) => {
  const [jokeSearch, setJokeSearch] = useState('');
  return (
    <JokeSearchContext.Provider value={{ jokeSearch, setJokeSearch }}>
      {children}
    </JokeSearchContext.Provider>
  );
};

export default JokeSearchProvider;
