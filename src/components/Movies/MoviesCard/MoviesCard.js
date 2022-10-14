import { timeToHour } from '../../../utils/utils';
import { baseApiPath } from '../../constants/constants';
import './MoviesCard.css';

export default function MoviesCard({
  movie,
  savedMoviesList,
  onClickLike,
  onClickRemove,
  location,
  ...props
}) {

  const IsLiked = savedMoviesList.find((i) => i.movieId === movie.id);
  const urlTest = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
  function handleLikeClick() {
    if (!IsLiked)
      onClickLike({
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink.match(urlTest) ? movie.trailerLink : `https://www.youtube.com/results?search_query=${movie.nameEN}`,
        image: `${baseApiPath}` + `${movie.image.url}`,
        thumbnail: `${baseApiPath}` + `${movie.image.formats.thumbnail.url}`,
      });
    else {
      onClickRemove(savedMoviesList.filter((i) => i.movieId === movie.id)[0]);
    }
  };

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
            className={`movie__bookmark-btn app__btn-opacity ${
              location === '/saved-movies'
                ? 'movie__bookmark-btn_del'
                : `movie__bookmark-btn_save movie__save-btn`
            }`}
            type={'checkbox'}
            onClick={
              location === '/saved-movies' ? handleDeleteClick : handleLikeClick
            }
            checked={IsLiked}
            onChange={(IsLiked) => !IsLiked}
          ></input>
        </div>
        <a
          className="app__btn-opacity movie__img-link"
          href={movie.trailerLink}
          onClick={handleImageClick}
        >
          <img
            className="movie__img"
            src={
              location === '/saved-movies'
                ? `${movie.image}`
                : `${baseApiPath}` + `${movie.image.url}`
            }
            alt={movie.nameRU}
          />
        </a>
      </li>
    </section>
  );
}
