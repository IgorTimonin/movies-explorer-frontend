import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn=(true), isOpen, closeMenu, menuClass, ...props }) {
  return (
    <nav className={`nav nav__${menuClass} ${loggedIn ? '' : 'block__hide'}`}>
      {props.children}
      <NavLink
        className={`nav__link app__btn-opacity nav__link_${menuClass}`}
        onClick={closeMenu}
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className={`nav__link app__btn-opacity nav__link_${menuClass}`}
        onClick={closeMenu}
        to="/saved-movies"
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}
