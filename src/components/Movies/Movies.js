import './Movies.css';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import { useState } from 'react';

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
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [afterSearch, setAfterSearch] = useState(false);

  // let moviesQty = 3;
  // const moviesRender = (arr, rowLenght) => {
  //   for ()
  // }

  // useState(() => {
  //   console.log(filtredMoviesList);
  // }, [filtredMoviesList]);
// console.log(filtredMoviesList.length);
console.log(filtredMoviesList);
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
        moreBtnActive={filtredMoviesList.length > limit ? true : false}
        notFound={afterSearch && filtredMoviesList.length === 0 ? true : false}
      >
        {filtredMoviesList.map((movie) => (
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
