import './Navigation.css';

export default function Navigation(props) {
  return (
    <nav className={`nav block__hide ${props.loggedIn ? '' : 'block__hide'}`}>
      <a className="nav__link link-active_l app__btn-opacity" href="#">
        Фильмы
      </a>
      <a className="nav__link  app__btn-opacity" href="#">
        Сохранённые фильмы
      </a>
    </nav>
  );
}
