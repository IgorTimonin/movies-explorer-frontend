// import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Register></Register>
      <Login></Login>
      {/* <Header></Header> */}
      {/* <Main></Main> */}
      {/* <Movies></Movies> */}
      {/* <SavedMovies></SavedMovies> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
