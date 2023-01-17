import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useMovieDetails } from 'Utils/hooks/useMovieDetails';
import css from './MovieDetailsPage.module.css';


 const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);


  const location = useLocation();
   const goBack = location.state?.from ?? '/';
  //  описуємо перехід на попереднє місце знаходження (?? -означає null '' - валідні)

  return (
    <div>
      <Link to={goBack}>
        {' '}
        <p className={css.goBack}>Go back</p>
      </Link> 
      <div className={css.container}>

      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
        alt="{movieDetails.original_title}"
        />
        
        <div className={css.wrapper}>

      <h2>
        {movieDetails.title} (
        {movieDetails.release_date
          ? movieDetails.release_date.substring(0, 4)
          : ''}
        )
      </h2>


      <p>
        User Score:{' '}
        {movieDetails.vote_average
          ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
          : ''}
        %
      </p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>

      <h4>Genres</h4>
      <p>
        {movieDetails.genres
          ? movieDetails.genres.map(genre => genre.name).join(' ')
          : ''}
        </p>
      </div>
      </div>

      <p>Additional information</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link> 
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
// ОПисуємо рендер сторинці з детальним описом фільму та линком ПОВЕРТАЙСЯ