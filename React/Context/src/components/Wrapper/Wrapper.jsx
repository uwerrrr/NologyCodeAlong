import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContextProvider';
import style from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? style.wrapper_dark : style.wrapper_light}>
      {children}
    </div>
  );
};

export default Wrapper;
