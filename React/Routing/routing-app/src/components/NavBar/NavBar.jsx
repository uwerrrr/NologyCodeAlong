import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';

const NavBar = () => {

  // conditional styling
  const activeStyles = ({ isActive }) =>
    // pass { isActive } as props
    isActive ? `${style.link} ${style.active_link}` : style.link;
    // if the component is active -> add more style

  return (
    <nav className={style.nav}>
      <NavLink className={activeStyles} to='/'>
        Home
      </NavLink>
      <NavLink className={activeStyles} to='/projects'>
        Projects
      </NavLink>
      <NavLink className={activeStyles} to='/contact'>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
