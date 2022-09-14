import './SearchForm.css';

export default function SearchForm(props) {
  return (
    <section className="searchForm">
      <div className="searchBar">
        <div className="searchBar__icon"></div>
        <input className="searchBar__input" placeholder="Фильм"></input>
        <div className="searchBar__icon searchBar__submit app__btn-opacity"></div>
        <div className='searchBar__separator'></div>
        <input
          type={'checkbox'}
          name="shortMovies"
          className="searchBar__checkbox app__btn-opacity"
        ></input>
        <label for="shortMovies" className="searchBar__label">
          Короткометражки
        </label>
      </div>
    </section>
  );
}
