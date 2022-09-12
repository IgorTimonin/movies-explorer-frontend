import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__logo" to="/" />
        <a className="header__link" href="#">
          Фильмы
        </a>
        <a className="header__link" href="#">
          Сохранённые фильмы
        </a>
      </nav>
      <div className="header__user-block">
        <button
          className={`header__link ${
            props.loggedIn ? 'header__link_hide' : 'header__reg-btn'
          }`}
        >
          Регистрация
        </button>
        <button
          className={`header__user-btn btn-opacity ${
            props.loggedIn ? 'header__user-btn_black' : 'header__user-btn_green'
          }`}
          onClick={props.headerBtnAction}
        >
          Войти
          {/* {props.headerBtnText} */}
        </button>
      </div>
    </header>
  );
}
