import { useEffect, useState } from 'react';
import MoviesApi from '../../../utils/MoviesApi';
import './SearchForm.css';

export default function SearchForm({
  getMovies,
  moviesList,
  setMoviesList,
  setFiltredMoviesList,
  setIsLoading,
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState(0);
  const [isShortFilm, setIsShortFilm] = useState(false);

  function handleChangeQuery(e) {
    setSearchQuery(e.target.value);
  }

  function searchHandler(searchQuery) {
    console.log(isShortFilm);
    let resultList = moviesList.filter(
      (el) => el.nameRU.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
    if (isShortFilm) {
      resultList = resultList.filter((el) => el.duration >= 40);
    }
    setFiltredMoviesList(resultList);
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    getMovies();
  }

  useEffect(() => {
    console.log(isShortFilm);
  }, [isShortFilm]);

  useEffect(() => {
    moviesList.length === 0
      ? setTimeout(() => {}, 2000)
      : searchHandler(searchQuery);
  }, [moviesList]);

  return (
    <section className="searchForm">
      <div className="searchBar">
        <form className="searchBar__finder">
          <div className="searchBar__icon searchBar__icon_hide"></div>
          <input
            className="searchBar__input"
            placeholder="Фильм"
            required
            onChange={handleChangeQuery}
          ></input>
          <button
            type="submit"
            className="searchBar__icon searchBar__submit app__btn-opacity"
            onClick={submitHandler}
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
