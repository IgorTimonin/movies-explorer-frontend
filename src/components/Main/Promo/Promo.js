import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Promo.css';

export default function Promo(props) {
  return (
    <section className="promo" id='promo'>
      <h1 className="section__title section__title_promo">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo_nav">
        <Link
          className="app__btn app__btn-opacity app__btn_promo"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span>
            О проекте
          </span>
        </Link>
        <Link
          className="app__btn app__btn-opacity app__btn_promo"
          activeClass="active"
          to="techs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span>
            Технологии
          </span>
        </Link>
        <Link
          className="app__btn app__btn-opacity app__btn_promo"
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span>
            Студент
          </span>
        </Link>
      </div>
    </section>
  );
}