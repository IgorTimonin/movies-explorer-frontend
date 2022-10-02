import './Main.css'
import Promo from './Promo/Promo';
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main(props) {
    return (
        <div className='main'>
          <Promo></Promo>
          <AboutProject></AboutProject>
          <Techs></Techs>
          <AboutMe></AboutMe>
          <Portfolio></Portfolio>
        </div>
    );
}
