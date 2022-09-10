import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="header">
      <Link className="header__logo" to="/" />
      <div className="header__container">
        <div className="header__nav"></div>
        <div className="header__user-block">
          <div
            className={`${
              props.loggedIn ? 'header__link_hide' : 'header__reg-btn'
            }`}
          >
            {props.userEmail}
          </div>
          <button
            className={`header__user-btn btn-opacity ${
              props.loggedIn
                ? 'header__user-btn_black'
                : 'header__user-btn_green'
            }`}
            onClick={props.headerBtnAction}
          >
            {props.headerBtnText}
          </button>
        </div>
      </div>
    </header>
  );
}
