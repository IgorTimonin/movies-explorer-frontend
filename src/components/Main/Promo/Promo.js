import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

export default function Promo(props) {
  return (
    <section className="promo">
      <h1 className="section__title section__title_promo">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo_nav">
        <a className="app__btn app__btn-opacity app__btn_promo" href="#about">
          О проекте
        </a>
        <a className="app__btn app__btn-opacity app__btn_promo" href="#techs">
          Технологии
        </a>
        <a className="app__btn app__btn-opacity app__btn_promo" href="#aboutMe">
          Студент
        </a>
      </div>
    </section>
  );
}