import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__logo app__btn-opacity" to="/" />
        <a className="header__link app__btn-opacity" href="#">
          Фильмы
        </a>
        <a className="header__link app__btn-opacity" href="#">
          Сохранённые фильмы
        </a>
      </nav>
      <div className="header__user-block">
        <button
          className={`app__btn header__link app__btn-opacity ${
            props.loggedIn ? 'header__link_hide' : 'header__reg-btn'
          }`}
        >
          Регистрация
        </button>
        <button
          className={`app__btn header__user-btn app__btn-opacity ${
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
