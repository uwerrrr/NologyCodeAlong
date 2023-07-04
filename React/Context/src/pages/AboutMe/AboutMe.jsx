import style from './AboutMe.module.scss';
import { Heading } from '../../components/Heading/Heading';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContextProvider';

const AboutMe = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={darkMode ? style.section_dark : style.section_light}>
      <Heading darkMode={darkMode}>All about me</Heading>
    </section>
  );
};

export default AboutMe;
