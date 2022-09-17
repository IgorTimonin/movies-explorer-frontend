// import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import MoviesCardList from '../../Movies/MoviesCardList/MoviesCardList';
import './SavedMoviesCardList.css';
import pic from '../../../images/pic__COLOR_pic.jpg';
import pic1 from '../../../images/pic__COLOR_pic-6.jpg';
import pic2 from '../../../images/pic__COLOR_pic-2.jpg';

export default function SavedMoviesCardList(props) {
  return (
    <MoviesCardList btn={'btn_hide'}>
      <MoviesCard
        nameRU={'33 слова о дизайне'}
        duration={'1ч 47м'}
        image={pic}
        btnLogo={'movie__bookmark-btn_del'}
      />
      <MoviesCard
        nameRU={'33 слова о дизайне'}
        duration={'1ч 47м'}
        image={pic1}
        btnLogo={'movie__bookmark-btn_del'}
      />
      <MoviesCard
        nameRU={'33 слова о дизайне'}
        duration={'1ч 47м'}
        image={pic2}
        btnLogo={'movie__bookmark-btn_del'}
      />
    </MoviesCardList>
    // <section className="moviesCardList">
    //   <ul className="movieCardList__gallery">
    // <MoviesCard nameRU={'33 слова о дизайне'}
    //   duration={'1ч 47м'}
    //   image={pic}
    //   btnLogo={'movie__bookmark-btn_del'}></MoviesCard>
    //   </ul>
    //   </section>
  );
}
