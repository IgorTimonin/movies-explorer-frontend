import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import { useState } from 'react';

export default function SavedMovies({
  onClickLike,
  onClickRemove,
  savedMoviesList,
  ...props
}) {
  let isSearchEnd = false;

  function setIsSearchEnd(boolean) {
    isSearchEnd = boolean;
  }
  return (
    <section className="movies movies__container">
      <SearchForm setIsSearchEnd={setIsSearchEnd}></SearchForm>
      <SavedMoviesCardList
        savedMoviesList={savedMoviesList}
        onClickLike={onClickLike}
        onClickRemove={onClickRemove}
      ></SavedMoviesCardList>
      {/* <Preloader></Preloader> */}
    </section>
  );
}
