import './Movies.css';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';

export default function Movies(props) {
  return (
  <section className="movies">
    <SearchForm></SearchForm>
    <MoviesCard></MoviesCard>
    <MoviesCardList></MoviesCardList>
    {/* <Preloader></Preloader> */}
  </section>
  )
}
