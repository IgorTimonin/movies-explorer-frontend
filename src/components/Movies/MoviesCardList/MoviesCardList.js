import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

import pic from '../../../images/pic__COLOR_pic.jpg';
import pic1 from '../../../images/pic__COLOR_pic-1.jpg';
import pic2 from '../../../images/pic__COLOR_pic-2.jpg';
import pic3 from '../../../images/pic__COLOR_pic-3.jpg';
import pic4 from '../../../images/pic__COLOR_pic-4.jpg';
import pic5 from '../../../images/pic__COLOR_pic-5.jpg';
import pic6 from '../../../images/pic__COLOR_pic-6.jpg';
import pic7 from '../../../images/pic__COLOR_pic-7.jpg';
import pic8 from '../../../images/pic__COLOR_pic-8.jpg';
import pic9 from '../../../images/pic__COLOR_pic-9.jpg';
import pic10 from '../../../images/pic__COLOR_pic-10.jpg';
import pic11 from '../../../images/pic__COLOR_pic-11.jpg';

export default function MoviesCardList(props) {

  return (
    <section className="moviesCardList">
      <ul className="movieCardList__gallery">
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic1}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic2}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic3}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic4}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic5}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic6}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic7}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic8}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic9}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic10}
        />
        <MoviesCard
          nameRU={'33 слова о дизайне'}
          duration={'1ч 47м'}
          image={pic11}
        />
      </ul>
      <div className="moviesCardList__more">
        <button className="moviesCardList_more-btn app__btn-opacity">
          Ещё
        </button>
      </div>
    </section>
  );
}
