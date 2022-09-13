import './Techs.css';

export default function Techs(props) {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="section__heading section__heading_techs">Технологии</h2>
        <h3 className="section__title section__title_techs">7 технологий</h3>
        <p className="techs_text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="techs__info">
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            HTML
          </a>
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            CSS
          </a>
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            JS
          </a>
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            React
          </a>
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            Git
          </a>
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            Express
          </a>
          <a
            className="app__btn app__btn-opacity app__btn_promo app__btn_techs"
            href="#"
          >
            MongoDB
          </a>
        </div>
      </div>
    </section>
  );
}
