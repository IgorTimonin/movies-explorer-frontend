import './SearchForm.css';

export default function SearchForm(props) {
  return (
    <section className="searchForm">
      <div className="searchBar">
        <form className="searchBar__finder">
          <div className="searchBar__icon searchBar__icon_hide"></div>
          <input className="searchBar__input" placeholder="Фильм" required></input>
          <button type='submit' className="searchBar__icon searchBar__submit app__btn-opacity"></button>
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
