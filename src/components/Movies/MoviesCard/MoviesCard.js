import { timeToHour } from '../../../utils/utils';
import { baseApiPath } from '../../constants/constants';
import './MoviesCard.css';

export default function MoviesCard({nameRU, duration, image, trailerLink , ...props}) {
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
            <h2 className="movie__name">{nameRU}</h2>
            <div className="movie__duration">{timeToHour(duration)}</div>
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
          src={`${baseApiPath}` + `${image}`}
          alt={nameRU}
          // onClick={handleClick}
        />
      </li>
    </section>
  );
}
