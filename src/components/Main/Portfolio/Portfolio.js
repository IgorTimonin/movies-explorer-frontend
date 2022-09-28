import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <section className="portfolio section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <p className="portfolio__name">Статичный сайт</p>
          <a
            className="portfolio__link app__btn-opacity"
            href="https://igortimonin.github.io/how-to-learn/"
          >
            {' '}
          </a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__name">Адаптивный сайт</p>
          <a
            className="portfolio__link app__btn-opacity"
            href="https://igortimonin.github.io/russian-travel/"
          >
            {' '}
          </a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__name">Одностраничное приложение</p>
          <a
            className="portfolio__link app__btn-opacity"
            href="https://itmesto.students.nomoredomains.sbs/"
          >
            {' '}
          </a>
        </li>
      </ul>
    </section>
  );
}
