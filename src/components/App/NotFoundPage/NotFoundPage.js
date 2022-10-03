import { Link, useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage(props) {
  const navigate = useNavigate();
  const goBack = navigate(-1);
  return (
    <section className="notFoundPage">
      <div className="notFoundPage_container">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__text">Страница не найдена</p>
        <Link className="notFoundPage__backBtn app__btn-opacity" to={goBack}>
          Назад
        </Link>
      </div>
    </section>
  );
}
