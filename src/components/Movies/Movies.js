import './Movies.css';
import MoviesCard from './MoviesCard/MoviesCard';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';

import pic from '../../images/pic__COLOR_pic.jpg';
import pic1 from '../../images/pic__COLOR_pic-6.jpg';
import pic2 from '../../images/pic__COLOR_pic-2.jpg';
import pic3 from '../../images/pic__COLOR_pic-10.jpg';
import pic4 from '../../images/pic__COLOR_pic-8.jpg';
import pic5 from '../../images/pic__COLOR_pic-4.jpg';
import pic6 from '../../images/pic__COLOR_pic-1.jpg';
import pic7 from '../../images/pic__COLOR_pic-7.jpg';
import pic8 from '../../images/pic__COLOR_pic-3.jpg';
import pic9 from '../../images/pic__COLOR_pic-11.jpg';
import pic10 from '../../images/pic__COLOR_pic-9.jpg';
import pic11 from '../../images/pic__COLOR_pic-5.jpg';

export default function Movies(props) {
  return (
    <section className="movies movies__container">
      <SearchForm></SearchForm>
      {/* <MoviesCard></MoviesCard> */}
      <MoviesCardList>
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic1}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic2}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic3}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic4}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic5}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic6}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic7}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic8}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic9}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic10}
          btnLogo={'movie__bookmark-btn_save'}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic11}
          btnLogo={'movie__bookmark-btn_save'}
        />
      </MoviesCardList>
      {/* <Preloader></Preloader> */}
    </section>
  );
}
