import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import MenuPage from '../MenuPage/MenuPage';

function App() {
  const [loggedIn, setLoggedIn] = [false];
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenuClick = () => {
    setIsOpen(false);
  };

  // const headRoutes = ['/', '/movies', '/saved-movies'];
  // const renderPaths = (paths, Element) =>
  //   paths.map((path) => <Route key={path} path={path} element={Element} />);

  return (
    <>
      {/* <Header
        loggedIn={loggedIn}
        isOpen={isOpen}
        openMenu={handleMenuClick}
        closeMenu={handleCloseMenuClick}
      /> */}
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
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
