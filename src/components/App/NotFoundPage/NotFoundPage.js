import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage(props) {
  return (
    <section className="notFoundPage">
      <div className="notFoundPage_container">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__text">Страница не найдена</p>
        <Link className="notFoundPage__backBtn" to="/">
          Назад
        </Link>
      </div>
    </section>
  );
}
