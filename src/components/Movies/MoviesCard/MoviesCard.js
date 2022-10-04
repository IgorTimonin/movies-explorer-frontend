import './MoviesCard.css';

export default function MoviesCard(props) {
  // function handleLikeClick() {
  //   onMovieLike(movie);
  // }
  // function handleClick() {
  //   onMovieClick(movie);
  // }

  return (
    <section className="moviesCard">
      <li className="movie__item">
        <div className="movie__title-container">
          <div className="movie__title">
            <h2 className="movie__name">{props.nameRU}</h2>
            <div className="movie__duration">{props.duration}</div>
          </div>
            <input
              className={`movie__bookmark-btn app__btn-opacity ${props.btnLogo}`}
              // {movieLikeBtnClassName}
              type={'checkbox'}
              // onClick={handleLikeClick}
            ></input>
        </div>
        <img
          className="movie__img"
          src={props.image}
          alt={props.nameRU}
          // onClick={handleClick}
        />
      </li>
    </section>
  );
}
