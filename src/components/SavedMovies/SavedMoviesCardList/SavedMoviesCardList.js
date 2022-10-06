// import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import MoviesCardList from '../../Movies/MoviesCardList/MoviesCardList';
import './SavedMoviesCardList.css';
import pic from '../../../images/pic__COLOR_pic.jpg';
import pic1 from '../../../images/pic__COLOR_pic-6.jpg';
import pic2 from '../../../images/pic__COLOR_pic-2.jpg';

export default function SavedMoviesCardList({
  movies,
  isLoading,
  savedMoviesList,
  ...props
}) {
  return (
    <MoviesCardList btn={'btn_hide'}>
      {savedMoviesList.map((movie) => (
        <MoviesCard
          key={movie.id}
          nameRU={movie.nameRU}
          duration={movie.duration}
          image={movie.image.url}
          trailerLink={movie.trailerLink}
          btnLogo={'movie__bookmark-btn_del'}
        />
      ))}
    </MoviesCardList>
  );
}
