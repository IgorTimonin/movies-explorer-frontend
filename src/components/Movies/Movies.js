import './Movies.css';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import { useEffect, useState } from 'react';

export default function Movies({
  getMovies,
  moviesList,
  setMoviesList,
  loggedIn,
  isLoading,
  setIsLoading,
  ...props
}) {
  const [filtredMoviesList, setFiltredMoviesList] = useState([]);
  const [limit, setLimit] = useState(4);
  const [offset, setOffset] = useState(limit);
  const [afterSearch, setAfterSearch] = useState(false);
  const [moreBtnActive, setMoreBtnActive] = useState(false);

  function offsetChanger() {
    if (offset < filtredMoviesList.length) {
      setOffset(limit + offset);
    }
    setMoreBtnActive(false);
  }

  useEffect(() => {
    filtredMoviesList.length > limit
      ? setMoreBtnActive(true)
      : setMoreBtnActive(false);
    setOffset(limit);
  }, [filtredMoviesList]);

  return (
    <section className="movies movies__container">
      <SearchForm
        getMovies={getMovies}
        moviesList={moviesList}
        setAfterSearch={setAfterSearch}
        setFiltredMoviesList={setFiltredMoviesList}
        setIsLoading={setIsLoading}
      ></SearchForm>
      <MoviesCardList
        isLoading={isLoading}
        moreBtnActive={moreBtnActive}
        notFound={afterSearch && filtredMoviesList.length === 0 ? true : false}
        offsetChanger={offsetChanger}
      >
        {filtredMoviesList.slice(0, offset).map((movie) => (
          <MoviesCard
            key={movie.id}
            nameRU={movie.nameRU}
            duration={movie.duration}
            image={movie.image.url}
            trailerLink={movie.trailerLink}
            btnLogo={'movie__bookmark-btn_save'}
          />
        ))}
      </MoviesCardList>
    </section>
  );
}
