import { timeToHour } from '../../../utils/utils';
import { baseApiPath } from '../../constants/constants';
import './MoviesCard.css';

export default function MoviesCard({
  movie,
  savedMoviesList,
  onClickLike,
  onClickRemove,
  ...props
}) {
  function handleLikeClick() {
    onClickLike({
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      image: `${baseApiPath}` + `${movie.image.url}`,
      thumbnail: `${baseApiPath}` + `${movie.image.formats.thumbnail.url}`,
    });
  }

  function handleDeleteClick() {
    onClickRemove(movie);
  }

  function handleImageClick() {
    return () =>
      window.open(movie.trailerLink, '_blank', 'noopener noreferrer');
  }

  return (
    <section className="moviesCard">
      <li className="movie__item">
        <div className="movie__title-container">
          <div className="movie__title">
            <h2 className="movie__name">{movie.nameRU}</h2>
            <div className="movie__duration">{timeToHour(movie.duration)}</div>
          </div>
          <input
            className={`movie__bookmark-btn app__btn-opacity ${props.btnLogo}`}
            // {movieLikeBtnClassName}
            type={'checkbox'}
            onClick={handleLikeClick}
            // checked={IsLiked}
            // defaultValue={}
            // onChange={() => IsLiked(!IsLiked)}
          ></input>
        </div>
        <img
          className="movie__img"
          src={`${baseApiPath}` + `${movie.image.url}`}
          alt={movie.nameRU}
          onClick={handleImageClick}
        />
      </li>
    </section>
  );
}
