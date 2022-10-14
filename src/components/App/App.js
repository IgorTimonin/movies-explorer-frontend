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
  const [updateProfileMessage, setUpdateProfileMessage] = useState('');
  const [onEdit, setOnEdit] = useState(false);
  const nav = useNavigate();
  useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
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
          localStorage.clear();
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
    // nav('/');
  }, []);

  //Обновление профиля пользователя
  function handleUpdateUser(userData) {
    setIsLoading(true);
    mainApi
      .setUserData(userData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        localStorage.setItem(`${currentUser._id}-profile`, newUserInfo);
        setUpdateProfileMessage('Данные успешно обновлены');
        setIsLoading(false);
        setOnEdit(false);
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setUpdateProfileMessage('Пользователь с таким email уже существует');
        } else {
          setUpdateProfileMessage('При обновлении профиля произошла ошибка');
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
        // localStorage.setItem('savedMovieList', moviesList);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
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
          <Route path="/signin" element={<Login onSubmit={onSignIn} />}></Route>
          <Route
            path="/signup"
            element={<Register onSubmit={onSignUp} />}
          ></Route>
          <Route
            path="/"
            element={
              // <PrivateRoute loggedIn={loggedIn}>
              <Layout
                location={location.pathname}
                loggedIn={loggedIn}
                isOpen={isOpen}
                menuClick={handleMenuClick}
                closeMenu={handleCloseMenuClick}
              />
              // </PrivateRoute>
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
                    location={location.pathname}
                    getSavedMovies={handleGetSavedMovies}
                    onClickLike={addToSavedMovies}
                    onClickRemove={removeFromSavedMovies}
                    isSearchEnd={isSearchEnd}
                    setIsSearchEnd={setIsSearchEnd}
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
                    message={updateProfileMessage}
                    onEdit={onEdit}
                    setOnEdit={setOnEdit}
                    isLoading={isLoading}
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
