// import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import MoviesCardList from '../../Movies/MoviesCardList/MoviesCardList';

export default function SavedMoviesCardList({
  movies,
  isLoading,
  savedMoviesList,
  onClickLike,
  onClickRemove,
  ...props
}) {
  return (
    <MoviesCardList
      btn={'btn_hide'}
      savedMoviesList={savedMoviesList}
      onClickLike={onClickLike}
      onClickRemove={onClickRemove}
    >
      {savedMoviesList.map((movie) => (
        <MoviesCard
          movie={movie}
          key={movie.id}
          btnLogo={'movie__bookmark-btn_save'}
          savedMoviesList={savedMoviesList}
          onClickLike={onClickLike}
          onClickRemove={onClickRemove}
        />
      ))}
    </MoviesCardList>
  );
}
