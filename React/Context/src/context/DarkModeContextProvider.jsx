import { createContext, useState } from 'react';

export const DarkModeContext = createContext(null);

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* we set value of context provider = Obj that has state values and setter functions */}

      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
