// import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  return <div className='App'>
    <Header></Header>
    {/* <Main></Main> */}
    <Movies></Movies>
    <Footer></Footer>
  </div>;
}

export default App;
