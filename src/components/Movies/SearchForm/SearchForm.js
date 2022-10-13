import { useContext, useEffect, useState } from 'react';

import { moviesFinder, shortFilmSorter } from '../../../utils/utils';
import { CurrentUserContext } from '../../context/CurrentUserContext';
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
  const currentUser = useContext(CurrentUserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  let lastSearch = localStorage.getItem(`${currentUser._id}-searchQuery`);
  let shortFilmStatus = localStorage.getItem(`${currentUser._id}-shortFilm`);
  let findedMovies = JSON.parse(
    localStorage.getItem(`${currentUser._id}-findedMovies`)
  );

  // localStorage.setItem(`${currentUser._id}-shortFilm`, isShortFilm);

  function handleChangeQuery(e) {
    setSearchQuery(e.target.value);
  }

  //функция поиска фильмов с фитром по короткометражкам
  function searchHandler(arr, query) {
    setIsSearchEnd(false);
    isShortFilm
      ? setFiltredMoviesList(moviesFinder(shortFilmSorter(arr), query))
      : setFiltredMoviesList(moviesFinder(arr, query));
    localStorage.setItem(`${currentUser._id}-searchQuery`, query);
    localStorage.setItem(
      `${currentUser._id}-findedMovies`,
      JSON.stringify(arr)
    );
    setIsSearchEnd(true);
  }

  function submitHandler(e) {
    e.preventDefault();
    windowWidthChecker();
    setIsLoading(true);
    getMovies();
  }

  useEffect(() => {
    localStorage.setItem(`${currentUser._id}-shortFilm`, isShortFilm);
    if (location === '/movies' && moviesList.length !== 0) {
      isShortFilm
        ? setFiltredMoviesList(shortFilmSorter(filtredMoviesList))
        : searchHandler(moviesList, searchQuery);
      setIsSearchEnd(true);

      console.log(`isShortFilm: ${isShortFilm}`);
      console.log(`storage: ${shortFilmStatus}`);
    }
  }, [isShortFilm]);

  useEffect(() => {
    if (location === '/movies') {
      findedMovies === [] && moviesList.length === 0
        ? setTimeout(() => {}, 2000)
        : searchHandler(moviesList, searchQuery);
        console.log('useEffect!');
    }
  }, [moviesList]);

  useEffect(() => {
    if (location === '/movies') {
      if (findedMovies !== []) {
        setSearchQuery(lastSearch);
        setIsShortFilm(shortFilmStatus);
        searchHandler(findedMovies, lastSearch);
        console.log(`UUstorage: ${shortFilmStatus}`);
      }

    }
  }, []);

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
            type="checkbox"
            name="shortFilm"
            className="searchBar__checkbox app__btn-opacity"
            checked={isShortFilm ? true : false}
            onChange={() => {
              setIsShortFilm(!isShortFilm);
              // localStorage.setItem(`${currentUser._id}-shortFilm`, isShortFilm);
            }}
          ></input>
          <label htmlFor="shortFilm" className="searchBar__label">
            Короткометражки
          </label>
        </div>
      </div>
    </section>
  );
}
