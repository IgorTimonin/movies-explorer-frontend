import './AboutMe.css';

export default function AboutMe(props) {
  return (
    <section className="aboutMe section">
      <h2 className="section__heading">Студент</h2>
      <article className="profile">
        <div className="profile__info">
          <h3 className="section__title">Тимонин Игорь</h3>
          <p className="profile__subtitle">Фронтенд-разработчик, 36 лет</p>
          <p className="profile__text">
            Я родился и живу в Московской области, закончил факультет Рекламы и
            PR в МФЮА. Много лет работал в компьютерном ритейле, от продавца до
            управляющего магазином. В 2020 году решил изменить свою жизнь и
            заняться любимым делом - кодить. Прошёл несколько самостоятельных
            курсов и 10-ти месячное обучение в Яндекс.Практикуме по
            специальности "Веб-разработчик". В настоящее время занимаюсь фриланс
            заказами. Женат, есть двое детей. В свободное время люблю слушать
            качественную музыка, путешествовать, ходить в походы.
          </p>
          <div>
            <a
              href="https://github.com/IgorTimonin"
              className="profile__social app__btn app__btn-opacity"
            >
              Github
            </a>
            <a
              href="mailto:funnyman@list.ru"
              className="profile__social app__btn app__btn-opacity"
            >
              Mail
            </a>
            <a
              href=" https://t.me/IgorTimonin"
              className="profile__social app__btn app__btn-opacity"
            >
              Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/igor-timonin-750085232/"
              className="profile__social app__btn app__btn-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <img
          className="profile__photo"
          src={require('../../../images/profileMe.jpg')}
          alt="Фотография профиля"
        ></img>
      </article>
    </section>
  );
}
