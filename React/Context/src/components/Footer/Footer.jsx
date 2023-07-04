import style from './Footer.module.scss';
import Button from '../Button/Button';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContextProvider';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <footer className={darkMode ? style.footer_dark : style.footer_light}>
      <span>Copyright Alex</span>
      <Button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </footer>
  );
};

export default Footer;
