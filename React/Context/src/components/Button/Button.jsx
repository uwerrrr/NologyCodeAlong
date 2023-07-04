import { useContext } from 'react';
import style from './Button.module.scss';
import { DarkModeContext } from '../../context/DarkModeContextProvider';

const Button = ({ children, ...rest }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <button {...rest} className={darkMode ? style.btn_dark : style.btn_light}>
      {children}
    </button>
  );
};

export default Button;
