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
        <ul className="techs__info">
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            HTML
          </li>
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            CSS
          </li>
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            JS
          </li>
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            React
          </li>
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            Git
          </li>
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            Express
          </li>
          <li className="app__btn app__btn-opacity app__btn_promo app__btn_techs">
            MongoDB
          </li>
        </ul>
      </div>
    </section>
  );
}
