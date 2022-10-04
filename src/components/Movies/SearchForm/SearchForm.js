import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({
  getMovies,
  moviesList,
  setFiltredMoviesList,
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState(0);

  function handleChangeQuery(e) {
    setSearchQuery(e.target.value);
  }

  async function searchHandler(searchQuery) {
    getMovies()
    return await moviesList[searchQuery];
    // moviesList.filter(
    //     (el) => el.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    //   )
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(searchHandler(searchQuery));
    // setFiltredMoviesList(searchHandler(searchQuery));
  }

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
            name="shortMovies"
            className="searchBar__checkbox app__btn-opacity"
          ></input>
          <label htmlFor="shortMovies" className="searchBar__label">
            Короткометражки
          </label>
        </div>
      </div>
    </section>
  );
}
