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
import PrivateRoute from '../../hoc/PrivateRoute';

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchEnd, setIsSearchEnd] = useState(false);
  const [message, setMessage] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  const nav = useNavigate();
  useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (
      loggedIn && (location.pathname === '/signup' ||
      location.pathname === '/signin')
    ) {
        nav('/movies');
      }
    if (
      !loggedIn && (location.pathname === '/movies' ||
      location.pathname === '/saved-movies')
    ) {
      nav('/');
    }
  }, []);

  //Регистрация нового пользователя
  function onSignUp(name, email, password) {
    mainApi
      .signInSignUp('/signup', name, email, password)
      .then((res) => {
        if (res.statusCode !== 400) {
          setCurrentUser(res);
          setLoggedIn(true);
          setMessage('');
          nav('/movies');
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setMessage('Пользователь с таким email уже существует');
        } else {
          setMessage('При регистрации пользователя произошла ошибка.');
        }
      });
  }

  //Аутентификация пользователя
  function onSignIn(password, email) {
    mainApi
      .signInSignUp('/signin', password, email)
      .then((res) => {
        if (res.statusCode !== 400) {
          tokenCheck();
          setMessage('');
          nav('/movies');
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setMessage('Переданы не корректные данные для авторизации');
        }
        if (err === 'Ошибка: 401') {
          setMessage('Вы ввели неправильный логин или пароль.');
        }
        if (err === 'Ошибка: 500') {
          setMessage('На сервере произошла ошибка.');
        } else {
          setMessage(
            'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'
          );
        }
      });
  }

  //Выход из учётной записи
  function onLogOut() {
    mainApi
      .signout()
      .then((res) => {
        if (res.statusCode !== 400) {
          setLoggedIn(false);
          nav('/');
          localStorage.clear();
          setMoviesList([]);
          setSavedMoviesList([]);
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
          setMessage('');
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }

  //Обновление профиля пользователя
  function handleUpdateUser(userData) {
    setIsLoading(true);
    mainApi
      .setUserData(userData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        localStorage.setItem(`${currentUser._id}-profile`, newUserInfo);
        setMessage('Данные успешно обновлены');
        setIsLoading(false);
        setOnEdit(false);
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setMessage('Пользователь с таким email уже существует');
        } else {
          setMessage('При обновлении профиля произошла ошибка');
        }
      });
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
      .catch((err) => {
        setMessage(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
        console.log(err);
      });
  }

  //получение массива сохранённых пользователем фильмов
  function handleGetSavedMovies() {
    mainApi
      .getSavedMovie()
      .then((movies) => {
        setSavedMoviesList(movies);
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesList));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  //Добавление фильма в сохранённые
  function addToSavedMovies(movie) {
    mainApi
      .postNewMovie(movie)
      .then((savedMovie) => {
        setSavedMoviesList([savedMovie, ...savedMoviesList]);
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesList));
      })
      .catch((err) => console.log(err));
  }

  // удаление фильма из сохранённых и отрисовка актуального списка фильмов
  function removeFromSavedMovies(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const actualMoviesList = savedMoviesList.filter(
          (m) => m._id !== movie._id
        );
        setSavedMoviesList(actualMoviesList);
        localStorage.setItem('savedMovies', JSON.stringify(actualMoviesList));
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/signin"
            element={<Login onSubmit={onSignIn} message={message} />}
          ></Route>
          <Route
            path="/signup"
            element={<Register onSubmit={onSignUp} message={message} />}
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
                <PrivateRoute loggedIn={loggedIn}>
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
                    isSearchEnd={isSearchEnd}
                    setIsSearchEnd={setIsSearchEnd}
                    message={message}
                    setMessage={setMessage}
                  />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <SavedMovies
                    loggedIn={loggedIn}
                    isOpen={isOpen}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    savedMoviesList={savedMoviesList}
                    setSavedMoviesList={setSavedMoviesList}
                    location={location.pathname}
                    getSavedMovies={handleGetSavedMovies}
                    onClickLike={addToSavedMovies}
                    onClickRemove={removeFromSavedMovies}
                    isSearchEnd={isSearchEnd}
                    setIsSearchEnd={setIsSearchEnd}
                    message={message}
                    setMessage={setMessage}
                  />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <Profile
                    onSubmit={handleUpdateUser}
                    onLogOut={onLogOut}
                    message={message}
                    onEdit={onEdit}
                    setOnEdit={setOnEdit}
                  />
                </PrivateRoute>
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
