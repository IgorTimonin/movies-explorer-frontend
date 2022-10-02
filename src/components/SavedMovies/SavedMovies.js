import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';

export default function SavedMovies(props) {
  return (
    <section className="movies movies__container">
      <SearchForm></SearchForm>
      <SavedMoviesCardList></SavedMoviesCardList>
    </section>
  );
}
