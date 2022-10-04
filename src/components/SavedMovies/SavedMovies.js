import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';

export default function SavedMovies(props) {
  return (
      <section className="movies movies__container">
        <SearchForm></SearchForm>
        <SavedMoviesCardList></SavedMoviesCardList>
        {/* <Preloader></Preloader> */}
      </section>
  );
}
