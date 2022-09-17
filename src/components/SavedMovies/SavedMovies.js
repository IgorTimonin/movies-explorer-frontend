import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';

export default function SavedMovies(props) {
  return (
    <div>
      <SearchForm></SearchForm>
      <SavedMoviesCardList></SavedMoviesCardList>
    </div>
  );
}
