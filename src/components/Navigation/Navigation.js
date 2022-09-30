import './Navigation.css';

export default function Navigation(props) {

  return (
    <nav
      className={`nav nav__${props.className} ${
        props.loggedIn ? '' : 'block__hide'
      }`}
    >
      {props.children}
      <a
        className={`nav__link link-active app__btn-opacity nav__link_${props.className}`}
        href="#"
      >
        Фильмы
      </a>
      <a
        className={`nav__link app__btn-opacity nav__link_${props.className}`}
        href="#"
      >
        Сохранённые фильмы
      </a>
    </nav>
  );
}
