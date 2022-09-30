import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header(props) {
  const [screenRes, setScreenRes] = useState('');

  return (
    <header className="header section">
      <div className="header__nav-block">
        <Link className="header__logo app__btn-opacity" to="/" />
        <Navigation loggedIn={props.loggedIn}></Navigation>
      </div>
      <div className="header__user-block">
        <button
          className={`app__btn nav__link app__btn-opacity ${
            props.loggedIn ? 'block__hide' : 'header__reg-btn'
          }`}
          // onClick={}
        >
          Регистрация
        </button>
        <button
          className={`app__btn header__user-btn app__btn-opacity ${
            props.loggedIn ? 'header__user-btn_black' : 'header__user-btn_green'
          }`}
          onClick={props.headerBtnAction}
        >
          {props.loggedIn ? 'Аккаунт' : 'Войти'}
        </button>
      </div>
      <button className="header__menu-btn app__btn-opacity"></button>
    </header>
  );
}
