import React from 'react';
import './Promo.css';

export default function Promo(props) {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента
        <React.Fragment>
          <br />
        </React.Fragment>
        факультета Веб-разработки.
      </h1>
      <div className="promo_nav">
        <a className="app__btn app__btn-opacity app__btn_promo" href="#">
          О проекте
        </a>
        <a className="app__btn app__btn-opacity app__btn_promo" href="#">
          Технологии
        </a>
        <a className="app__btn app__btn-opacity app__btn_promo" href="#">
          Студент
        </a>
      </div>
    </section>
  );
}