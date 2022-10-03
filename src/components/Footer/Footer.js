import './Footer.css';

export default function Footer({location}) {
  return (
    <footer
      className={`footer ${
        location === '/signup' ||
        location === '/signin' ||
        location === '/profile'
          ? 'block__hide'
          : ''
      }`}
    >
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; Timonin Igor 2022</p>
        <div className="footer__nav">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://practicum.yandex.ru/"
            className="profile__social profile__social_footer app__btn app__btn-opacity"
          >
            Яндекс.Практикум
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/IgorTimonin"
            className="profile__social profile__social_footer app__btn app__btn-opacity"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/igor-timonin-750085232/"
            className="profile__social profile__social_footer app__btn app__btn-opacity"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
