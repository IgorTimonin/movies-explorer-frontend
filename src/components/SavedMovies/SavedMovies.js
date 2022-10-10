import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import { useState } from 'react';

export default function SavedMovies(props) {

  const [savedMoviesList, setSavedMoviesList] = useState([]);
let isSearchEnd = false;

function setIsSearchEnd(boolean) {
  isSearchEnd = boolean;
}
  return (
    <section className="movies movies__container">
      <SearchForm setIsSearchEnd={setIsSearchEnd}></SearchForm>
      <SavedMoviesCardList
        savedMoviesList={props.savedMoviesList}
      ></SavedMoviesCardList>
      {/* <Preloader></Preloader> */}
    </section>
  );
}
