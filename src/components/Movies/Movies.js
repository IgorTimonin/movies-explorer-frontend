import './Movies.css';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { useEffect, useState, useLayoutEffect } from 'react';

export default function Movies({
  getMovies,
  moviesList,
  setMoviesList,
  loggedIn,
  isLoading,
  setIsLoading,
  location,
  ...props
}) {
  const [filtredMoviesList, setFiltredMoviesList] = useState([]);
  const [limit, setLimit] = useState(12);
  const [rowSize, setRowSize] = useState(3);
  const [offset, setOffset] = useState(limit);
  const [isSearchEnd, setIsSearchEnd] = useState(false);
  const [moreBtnActive, setMoreBtnActive] = useState(false);

  // изменяем кол-во отображаемых карточек для кнопки 'Ещё'
  function offsetChanger() {
    if (offset <= limit) {
      setOffset(limit + rowSize);
    } else if (limit < offset < filtredMoviesList.length) {
      setOffset(offset + rowSize);
    }
  }

  function offsetReset() {
    setOffset(limit);
    console.log('offsetReset');
  }

  useEffect(() => {
    setOffset(limit);
  }, [limit]);

  useEffect(() => {
    console.log(`фильмов: ${filtredMoviesList.length}`);
  }, [filtredMoviesList]);

  useEffect(() => {
    console.log(`offset: ${offset}`);
  }, [offset]);

  // выбираем кол-во отображаемых карточек в зависимости от ширины экрана
  function windowWidthChecker() {
    if (window.innerWidth >= 1280) {
      setLimit(12);
      setRowSize(3);
      console.log(`limit ${limit}`);
    } else if (window.innerWidth >= 768) {
      setLimit(8);
      setRowSize(2);
      console.log(`limit ${limit}`);
    } else if (window.innerWidth < 768) {
      setLimit(5);
      setRowSize(2);
      console.log(`limit ${limit}`);
    }
  }

  // useEffect(() => {
  //   setOffset(limit);;
  // }, [limit]);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setTimeout(() => {
          windowWidthChecker();
        }, 2000);
      }
    );
    return (window.addEventListener(
      'resize',
      () => {
        setTimeout(() => {
          windowWidthChecker();
        }, 2000);
      }
    ))
  }, []);

  useEffect(() => {
    filtredMoviesList.length > offset
      ? setMoreBtnActive(true)
      : setMoreBtnActive(false);
  }, [filtredMoviesList, offset]);

  return (
    <section className="movies movies__container">
      <SearchForm
        getMovies={getMovies}
        moviesList={moviesList}
        setIsSearchEnd={setIsSearchEnd}
        setFiltredMoviesList={setFiltredMoviesList}
        filtredMoviesList={filtredMoviesList}
        setIsLoading={setIsLoading}
        location={location}
        offsetReset={offsetReset}
        windowWidthChecker={windowWidthChecker}
      ></SearchForm>
      <MoviesCardList
        isLoading={isLoading}
        moreBtnActive={moreBtnActive}
        notFound={isSearchEnd && filtredMoviesList.length === 0 ? true : false}
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
