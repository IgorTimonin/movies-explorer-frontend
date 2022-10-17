import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import MoviesCardList from '../../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../../Movies/Preloader/Preloader';

export default function SavedMoviesCardList({
  movies,
  isLoading,
  renderedMoviesList,
  onClickLike,
  onClickRemove,
  location,
  message,
  setMessage,
  ...props
}) {
  return (
    <MoviesCardList
      btn={'btn_hide'}
      onClickLike={onClickLike}
      onClickRemove={onClickRemove}
      message={message}
    >
      <Preloader isLoading={isLoading}></Preloader>
      {renderedMoviesList.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          location={location}
          savedMoviesList={renderedMoviesList}
          onClickLike={onClickLike}
          onClickRemove={onClickRemove}
        />
      ))}
    </MoviesCardList>
  );
}
