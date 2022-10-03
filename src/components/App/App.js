import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from '../Header/Header';
import Main from '../Main/Main';
// import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import MenuPage from '../MenuPage/MenuPage';

function App() {
  const [loggedIn, setLoggedIn] = [true];
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenuClick = () => {
    setIsOpen(false);
  };

  return (
      <main className="App">
        <MenuPage
          loggedIn={loggedIn}
          isOpen={isOpen}
          closeMenu={handleCloseMenuClick}
        ></MenuPage>
        <Routes>
          <Route
            path="/"
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
                loggedIn={loggedIn}
                isOpen={isOpen}
                handleMenuClick={handleMenuClick}
                handleCloseMenuClick={handleCloseMenuClick}
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
        </Routes>
      </main>
  );
}

export default App;
