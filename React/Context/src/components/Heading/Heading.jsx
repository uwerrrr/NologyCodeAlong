import { useContext } from 'react';
import style from './Heading.module.scss';
import { DarkModeContext } from '../../context/DarkModeContextProvider';

export const Heading = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <h2 className={darkMode ? style.heading_dark : style.heading_light}>
      {children}
    </h2>
  );
};
