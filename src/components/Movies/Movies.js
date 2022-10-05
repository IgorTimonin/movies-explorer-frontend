import './Movies.css';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import { useState } from 'react';


export default function Movies({ getMovies, moviesList, setMoviesList, loggedIn, isLoading, setIsLoading, ...props }) {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleCloseMenuClick = () => {
  //   setIsOpen(false);
  // };
  const [filtredMoviesList, setFiltredMoviesList] = useState([])
  const [rowLenght, setRowLenght] = useState(3)
  // let moviesQty = 3;
  // const moviesRender = (arr, rowLenght) => {
  //   for ()
  // }
useState(() => {
  console.log(filtredMoviesList);
}, [filtredMoviesList]);

  return (
    <section className="movies movies__container">
      <SearchForm
        getMovies={getMovies}
        moviesList={moviesList}
        setMoviesList={setMoviesList}
        setFiltredMoviesList={setFiltredMoviesList}
        setIsLoading={setIsLoading}
      ></SearchForm>
      <MoviesCardList isLoading={isLoading}>
        <Preloader isLoading={isLoading}></Preloader>
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
      {/* <Preloader isLoading={isLoading}></Preloader> */}
    </section>
  );
}
