import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import MoviesCardList from '../../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../../Movies/Preloader/Preloader';

export default function SavedMoviesCardList({
  movies,
  isLoading,
  savedMoviesList,
  onClickLike,
  onClickRemove,
  location,
  message,
  setMessage,
  // notFound,
  ...props
}) {
  return (
    <MoviesCardList
      btn={'btn_hide'}
      savedMoviesList={savedMoviesList}
      onClickLike={onClickLike}
      onClickRemove={onClickRemove}
      message={message}
      // notFound={notFound}
    >
      <Preloader isLoading={isLoading}></Preloader>
      {savedMoviesList.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          location={location}
          savedMoviesList={savedMoviesList}
          onClickLike={onClickLike}
          onClickRemove={onClickRemove}
        />
      ))}
    </MoviesCardList>
  );
}
