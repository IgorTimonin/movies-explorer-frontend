import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CurrentUserContextProvider } from '../../hoc/CurrentUserContext';
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

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = [true];
  const [isOpen, setIsOpen] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    <CurrentUserContextProvider>
      <div className="App">
        <Routes>
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
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
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
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
