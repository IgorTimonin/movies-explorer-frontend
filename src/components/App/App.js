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
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = useState({
    name: 'пользователь',
    email: 'ваш email',
  });
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

  function onSignIn(password, email) {
    mainApi
      .signInSignUp('/signin', password, email)
      .then((res) => {
        if (res.statusCode !== 400) {
          tokenCheck();
          nav('/movies');
          console.log(currentUser);
        }
      })
      .catch((err) => console.log(err));
  }

  function onLogOut(password, email) {
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

  function tokenCheck() {
    mainApi
      .getUserData('/users/me')
      .then((res) => {
        if (res.email) {
          setCurrentUser(res);
          // currentUser.name = res.name;
          // currentUser.email = res.email;
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   nav('/');
  // }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  // function handleCardLike(card) {
  //   // Проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some((i) => i === currentUser._id);
  //   // Отправляем запрос вmainApi и получаем обновлённые данные карточек
  //  mainApi
  //     .likeSwitcher(card._id, isLiked)
  //     .then((newCards) => {
  //       setCards((data) =>
  //         data.map((c) => (c._id === card._id ? newCards : c))
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // }

  function handleUpdateUser(userData) {
      console.log(
        JSON.stringify({
          name: userData.name,
          email: userData.email,
        })
      );
    mainApi
      .setUserData(userData.name, userData.email)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })
      .catch((err) => console.log(err));
  };

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenuClick = () => {
    setIsOpen(false);
  };

  function getMovies() {
    MoviesApi()
      .then((movies) => {
        setMoviesList(movies);
        setIsLoading(false);
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
                  setMoviesList={setMoviesList}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  location={location.pathname}
                />
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  loggedIn={loggedIn}
                  isOpen={isOpen}
                  handleMenuClick={handleMenuClick}
                  handleCloseMenuClick={handleCloseMenuClick}
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
