import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';
import MoviesApi from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = useState({
    name: 'пользователь',
    email: 'ваш email',
  });

  //Регистрация нового пользователя
  function onSignUp(name, email, password) {
    mainApi
      .signInSignUp('/signup', name, email, password)
      .then((res) => {
        if (res.statusCode !== 400) {
          setLoggedIn(true);
          nav('/movies');
        }
      })
      .catch((err) => {
        console.log(`Ошибка при регистрации: ${err}`);
      });
  }

  //Аутентификация пользователя
  function onSignIn(password, email) {
    mainApi
      .signInSignUp('/signin', password, email)
      .then((res) => {
        if (res.statusCode !== 400) {
          tokenCheck();
          nav('/movies');
        }
      })
      .catch((err) => console.log(err));
  }

  //Выход из учётной записи
  function onLogOut() {
    mainApi
      .signout()
      .then((res) => {
        if (res.statusCode !== 400) {
          setLoggedIn(false);
          nav('/');
        }
      })
      .catch((err) => console.log(err));
  }

  //Авторизация пользователя
  function tokenCheck() {
    mainApi
      .getUserData('/users/me')
      .then((res) => {
        if (res.email) {
          setCurrentUser(res);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  //Обновление профиля пользователя
  function handleUpdateUser(userData) {
    mainApi
      .setUserData(userData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })
      .catch((err) => console.log(err));
  }

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenuClick = () => {
    setIsOpen(false);
  };

  //получение массива фильмов из API BeatFilm
  function getMovies() {
    MoviesApi()
      .then((movies) => {
        setMoviesList(movies);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  //получение массива сохранённых пользователем фильмов
  function handleGetSavedMovies() {
    mainApi.getSavedMovie()
      .then((movies) => {
        setSavedMoviesList(movies);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  //Добавление фильма в сохранённые
  function addToSavedMovies(movie) {
    mainApi
      .postNewMovie(movie)
      .then((savedMovie) =>
        setSavedMoviesList([savedMovie, ...savedMoviesList])
      )
      .catch((err) => console.log(err));
  }

  // удаление фильма из сохранённых
  function removeFromSavedMovies(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Login onSubmit={onSignIn} />}></Route>
          <Route
            path="/signup"
            element={<Register onSubmit={onSignUp} />}
          ></Route>
          <Route
            path="/"
            element={
              <Layout
                location={location.pathname}
                loggedIn={loggedIn}
                isOpen={isOpen}
                menuClick={handleMenuClick}
                closeMenu={handleCloseMenuClick}
              />
            }
          >
            <Route
              index
              element={
                <Main
                  loggedIn={loggedIn}
                  isOpen={isOpen}
                  handleMenuClick={handleMenuClick}
                  handleCloseMenuClick={handleCloseMenuClick}
                />
              }
            ></Route>
            <Route
              path="/movies"
              element={
                <Movies
                  getMovies={getMovies}
                  moviesList={moviesList}
                  savedMoviesList={savedMoviesList}
                  setMoviesList={setMoviesList}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  location={location.pathname}
                  onClickLike={addToSavedMovies}
                  onClickRemove={removeFromSavedMovies}
                />
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  loggedIn={loggedIn}
                  isOpen={isOpen}
                  savedMoviesList={savedMoviesList}
                  getSavedMovies={handleGetSavedMovies}
                  onClickLike={addToSavedMovies}
                  onClickRemove={removeFromSavedMovies}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile onSubmit={handleUpdateUser} onLogOut={onLogOut} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
