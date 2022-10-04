import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuPage from '../MenuPage/MenuPage';

export default function Layout({ loggedIn, isOpen, menuClick, closeMenu }) {
  const location = useLocation();
  const locationPath = location.pathname;
  return (
    <>
      <Header
        loggedIn={loggedIn}
        isOpen={isOpen}
        openMenu={menuClick}
        closeMenu={closeMenu}
        location={locationPath}
      ></Header>
      <main className="main">
        <MenuPage
          loggedIn={loggedIn}
          isOpen={isOpen}
          closeMenu={closeMenu}
        ></MenuPage>
        <Outlet></Outlet>
      </main>
      <Footer location={locationPath}></Footer>
    </>
  );
}
