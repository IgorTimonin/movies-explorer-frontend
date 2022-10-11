import { useEffect, useState } from 'react';
import MoviesApi from '../../../utils/MoviesApi';
import { moviesFinder, shortFilmSorter } from '../../../utils/utils';
import './SearchForm.css';

export default function SearchForm({
  getMovies,
  moviesList,
  setIsSearchEnd,
  setFiltredMoviesList,
  filtredMoviesList,
  setIsLoading,
  location,
  offsetReset,
  windowWidthChecker,
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  let lastSearch = localStorage.getItem('lastSearch');
  let filterToggleStatus = localStorage.getItem('shortFilm');

  function handleChangeQuery(e) {
    setSearchQuery(e.target.value);
  }

  function searchHandler() {
    setIsSearchEnd(false);
    isShortFilm
      ? setFiltredMoviesList(
          moviesFinder(shortFilmSorter(moviesList), searchQuery)
        )
      : setFiltredMoviesList(moviesFinder(moviesList, searchQuery));
      localStorage.setItem('lastSearch', searchQuery);
    setIsSearchEnd(true);
  }

  function submitHandler(e) {
    e.preventDefault();
    windowWidthChecker();
    setIsLoading(true);
    getMovies();
  }

  useEffect(() => {
    if (location === '/movies') {
      isShortFilm
        ? setFiltredMoviesList(shortFilmSorter(filtredMoviesList))
        : searchHandler();
      setIsSearchEnd(true);
      localStorage.setItem('shortFilm', isShortFilm);
    }
  }, [isShortFilm]);

  useEffect(() => {
    if (location === '/movies') {
      moviesList.length === 0 ? setTimeout(() => {}, 2000) : searchHandler();
    }
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
            defaultValue={lastSearch}
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
            defaultValue={filterToggleStatus}
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
