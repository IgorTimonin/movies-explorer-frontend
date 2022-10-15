import { useEffect, useState } from 'react';
import useFormWithValidation from '../../hoc/useFormWithValidation';

import { moviesFinder, shortFilmSorter } from '../../utils/utils';
import './SearchForm.css';

export default function SearchForm({
  getMovies,
  moviesList,
  setIsSearchEnd,
  savedMoviesList,
  setSavedMoviesList,
  setFiltredMoviesList,
  setFiltredSavedMovies,
  setRenderedMovies,
  filtredMoviesList,
  setIsLoading,
  location,
  offsetReset,
  windowWidthChecker,
  ...props
}) {
  const { handleChange } = useFormWithValidation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(
    JSON.parse(localStorage.getItem(`shortFilm`)) || false
  );
  let lastSearch = localStorage.getItem(`searchQuery`);
  let findedMovies = JSON.parse(localStorage.getItem(`findedMovies`));

  function handleChangeQuery(e) {
    handleChange(e);
    setSearchQuery(e.target.value);
  }

  //функция поиска фильмов с фитром по короткометражкам
  function searchHandler(arr, query) {
    setIsSearchEnd(false);
    if (location === '/movies') {
      isShortFilm
        ? setFiltredMoviesList(moviesFinder(shortFilmSorter(arr), query))
        : setFiltredMoviesList(moviesFinder(arr, query));
      localStorage.setItem(`searchQuery`, query);
      localStorage.setItem(`findedMovies`, JSON.stringify(arr));
    }
    if (location === '/saved-movies') {
      isShortFilm
        ? setFiltredSavedMovies(moviesFinder(shortFilmSorter(arr), query))
        : setFiltredSavedMovies(moviesFinder(arr, query));
    }
    setIsSearchEnd(true);
    setIsLoading(false);
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    if (location === '/movies') {
      windowWidthChecker();
      moviesList.length !== 0
        ? searchHandler(moviesList, searchQuery)
        : getMovies();
    }
    if (location === '/saved-movies') {
      searchHandler(savedMoviesList, searchQuery);
    }
  }

  const shortFilmChanger = () => {
    setIsShortFilm(!isShortFilm);
    localStorage.setItem(`shortFilm`, isShortFilm);
  };

  useEffect(() => {
    if (location === '/movies' && findedMovies) {
      localStorage.setItem(`shortFilm`, isShortFilm);
      isShortFilm
        ? setFiltredMoviesList(shortFilmSorter(filtredMoviesList))
        : searchHandler(findedMovies, searchQuery);
      setIsSearchEnd(true);
    }
    if (location === '/saved-movies') {
      isShortFilm
        ? setFiltredSavedMovies(shortFilmSorter(savedMoviesList))
        : searchHandler(savedMoviesList, searchQuery);
    }
      setIsSearchEnd(true);
  }, [isShortFilm]);

  useEffect(() => {
    if (location === '/movies') {
      moviesList.length === 0
        ? setTimeout(() => {}, 2000)
        : searchHandler(moviesList, searchQuery);
    }
  }, [moviesList]);

  useEffect(() => {
    if (location === '/movies') {
      let shortFilmStatus = localStorage.getItem(`shortFilm`);
      if (findedMovies) {
        setSearchQuery(lastSearch);
        if (JSON.parse(shortFilmStatus) !== true) {
          setIsShortFilm(false);
        } else {
          setIsShortFilm(true);
        }
        searchHandler(findedMovies, lastSearch);
      }
    }
    if (location === '/saved-movies') {
      setIsShortFilm(false)
      setSearchQuery('');
      setRenderedMovies(savedMoviesList);
    }
  }, [location]);

  return (
    <section className="searchForm">
      <div className="searchBar">
        <form className="searchBar__finder" onSubmit={submitHandler}>
          <div className="searchBar__icon searchBar__icon_hide"></div>
          <input
            type="text"
            value={searchQuery}
            name="searchMovie"
            className="searchBar__input"
            placeholder="Фильм"
            // defaultValue={lastSearch}
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
            type="checkbox"
            name="shortFilm"
            className={`searchBar__checkbox app__btn-opacity ${
              isShortFilm ? 'searchBar__checkbox_active' : ''
            }`}
            checked={isShortFilm}
            onChange={shortFilmChanger}
          ></input>
          <label htmlFor="shortFilm" className="searchBar__label">
            Короткометражки
          </label>
        </div>
      </div>
    </section>
  );
}
//
