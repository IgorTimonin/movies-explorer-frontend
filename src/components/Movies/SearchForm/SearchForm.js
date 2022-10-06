import { useEffect, useState } from 'react';
import MoviesApi from '../../../utils/MoviesApi';
import { moviesFilter } from '../../../utils/utils';
import './SearchForm.css';

export default function SearchForm({
  getMovies,
  moviesList,
  setAfterSearch,
  setFiltredMoviesList,
  setIsLoading,
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);

  function handleChangeQuery(e) {
    setSearchQuery(e.target.value);
  }

  function searchHandler() {
    setFiltredMoviesList(moviesFilter(moviesList, searchQuery, isShortFilm));
    setAfterSearch(true);
  }

  function submitHandler(e) {
    e.preventDefault();
    setAfterSearch(false)
    setIsLoading(true);
    getMovies();
  }

  useEffect(() => {
    moviesList.length === 0
      ? setTimeout(() => {}, 2000)
      : searchHandler();
  }, [moviesList]);

  return (
    <section className="searchForm">
      <div className="searchBar">
        <form className="searchBar__finder" onSubmit={submitHandler}>
          <div className="searchBar__icon searchBar__icon_hide"></div>
          <input
            type="text"
            name="searchMovie"
            className="searchBar__input"
            placeholder="Фильм"
            required
            onChange={handleChangeQuery}
          ></input>
          <button
            type="submit"
            className="searchBar__icon searchBar__submit app__btn-opacity"
          ></button>
        </form>

        <div className="searchBar__controls">
          <div className="searchBar__separator searchBar__icon_hide"></div>
          <input
            type={'checkbox'}
            name="shortFilm"
            className="searchBar__checkbox app__btn-opacity"
            checked={isShortFilm}
            onChange={() => setIsShortFilm(!isShortFilm)}
          ></input>
          <label htmlFor="shortFilm" className="searchBar__label">
            Короткометражки
          </label>
        </div>
      </div>
    </section>
  );
}
