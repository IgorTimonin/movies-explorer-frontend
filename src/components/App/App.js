import { useState } from 'react';
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
  const [loggedIn, setLoggedIn] = [true];
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleCloseMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      <Header
        loggedIn={loggedIn}
        isOpen={isOpen}
        openMenu={handleMenuClick}
        closeMenu={handleCloseMenuClick}
      ></Header>
      <MenuPage
        loggedIn={loggedIn}
        isOpen={isOpen}
        closeMenu={handleCloseMenuClick}
      ></MenuPage>
      {/* <Profile></Profile> */}
      {/* <Main></Main> */}
      <Movies></Movies>
      {/* <SavedMovies></SavedMovies> */}
      {/* <NotFoundPage></NotFoundPage> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
