import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './MenuPage.css';

export default function MenuPage({ loggedIn, isOpen, closeMenu, ...props }) {
  return (
    <section className={`menuPage ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          className="popup__btn-close app__btn-opacity"
          type="button"
          onClick={closeMenu}
        />
        <div className="popup__content">
          <Navigation
            loggedIn={loggedIn}
            isOpen={isOpen}
            closeMenu={closeMenu}
            menuClass="burgerMenu"
          >
            <Link
              className={`nav__link app__btn-opacity nav__link_burgerMenu`}
              onClick={closeMenu}
              to="/"
            >
              Главная
            </Link>
          </Navigation>
          <Link
            className="app__btn header__user-btn app__btn-opacity header__user-btn_black"
            onClick={closeMenu}
            to="/profile"
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </section>
  );
}