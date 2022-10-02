import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Movies/Preloader/Preloader';

export default function SavedMovies(props) {
  return (
    <>
      <Header
        loggedIn={props.loggedIn}
        isOpen={props.isOpen}
        openMenu={props.handleMenuClick}
        closeMenu={props.handleCloseMenuClick}
      />
      <section className="movies movies__container">
        <SearchForm></SearchForm>
        <SavedMoviesCardList></SavedMoviesCardList>
        {/* <Preloader></Preloader> */}
      </section>
      <Footer></Footer>
    </>
  );
}
