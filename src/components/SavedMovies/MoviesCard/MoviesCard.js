import MoviesCardList from '../../Movies/MoviesCardList/MoviesCardList';
import './MoviesCard.css';

export default function MoviesCard(props) {
  return (
    <section className="moviesCard">
      <div className='movies-list'>
        <MoviesCardList></MoviesCardList>
      </div>
    </section>
  )
}