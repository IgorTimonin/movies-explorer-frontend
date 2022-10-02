import './MoviesCardList.css';



export default function MoviesCardList(props) {

  return (
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        <ul className="movieCardList__gallery">{props.children}</ul>
        <div className="moviesCardList__more">
          <button
            className={`moviesCardList_more-btn app__btn-opacity ${props.btn}`}
          >
            Ещё
          </button>
        </div>
      </div>
    </section>
  );
}
