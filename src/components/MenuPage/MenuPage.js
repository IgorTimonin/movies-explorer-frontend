import Navigation from '../Navigation/Navigation';
import './MenuPage.css';

export default function MenuPage(props) {
  return (
    <section
      className={`menuPage ${
        props.isOpen && 'popup_opened' ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__btn-close app__btn-opacity"
          type="button"
          onClick={props.onClose}
        />
        <div className="popup__content">
          <Navigation isOpen={props.isOpen} className="burgerMenu">
            <a
              className={`nav__link app__btn-opacity nav__link_burgerMenu`}
              href="#"
            >
              Главная
            </a>
          </Navigation>
          <button
            className="app__btn header__user-btn app__btn-opacity header__user-btn_black"
            onClick={props.BtnAction}
          >
            Аккаунт
          </button>
        </div>
      </div>
    </section>
  );
}