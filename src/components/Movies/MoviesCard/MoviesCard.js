import Movies from '../Movies';
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
          <div className="movie__bookmark">
            <input
              className="movie__bookmark-btn app__btn-opacity"
              // {movieLikeBtnClassName}
              type={'checkbox'}
              // onClick={handleLikeClick}
            ></input>
            {/* <div className="movie__like-qty">{movie.likes.length}</div> */}
          </div>
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
