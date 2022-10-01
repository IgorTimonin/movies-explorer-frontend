import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn, isOpen, closeMenu, menuClass, ...props }) {
  return (
    <nav className={`nav nav__${menuClass} ${loggedIn ? '' : 'block__hide'}`}>
      {props.children}
      <Link
        className={`nav__link link-active app__btn-opacity nav__link_${menuClass}`}
        onClick={closeMenu}
        to="/movies"
      >
        Фильмы
      </Link>
      <Link
        className={`nav__link app__btn-opacity nav__link_${menuClass}`}
        onClick={closeMenu}
        to="/savedMovies"
      >
        Сохранённые фильмы
      </Link>
    </nav>
  );
}
