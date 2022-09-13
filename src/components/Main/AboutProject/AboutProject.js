import './AboutProject.css';

export default function AboutProject(props) {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__description">
        <div className="aboutProject__container">
          <div className="aboutProject__column">
            <h3 className="aboutProject__column-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutProject__column-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutProject__column">
            <h3 className="aboutProject__column-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutProject__column-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutProject__timeline">
          <div className="aboutProject__timeline-week-back timeline-week">
            1 неделя
          </div>
          <div className="aboutProject__timeline-text-back timeline-text">
            Back-end
          </div>
          <div className="aboutProject__timeline-week-front timeline-week">
            4 недели
          </div>
          <div className="aboutProject__timeline-text-front timeline-text">
            Front-end
          </div>
        </div>
      </div>
    </section>
  );
}
