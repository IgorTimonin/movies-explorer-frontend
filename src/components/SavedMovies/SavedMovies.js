import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import { useEffect, useState } from 'react';

export default function SavedMovies({
  onClickLike,
  onClickRemove,
  savedMoviesList,
  getSavedMovies,
  location,
  isLoading,
  setIsLoading,
  isSearchEnd,
  setIsSearchEnd,
  ...props
}) {
  const savedMovies = JSON.parse(localStorage.getItem(`savedMovies`));

  useEffect(() => {
    if (savedMovies && savedMovies.length === 0) {
      setIsLoading(true);
      getSavedMovies();
      setIsLoading(false);
    }
  }, []);

  return (
    <section className="movies movies__container">
      <SearchForm setIsSearchEnd={setIsSearchEnd}></SearchForm>
      <SavedMoviesCardList
        savedMoviesList={
          savedMoviesList || savedMovies.length === 0
            ? savedMoviesList
            : savedMovies
        }
        onClickLike={onClickLike}
        onClickRemove={onClickRemove}
        location={location}
        isLoading={isLoading}
      ></SavedMoviesCardList>
    </section>
  );
}
