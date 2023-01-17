import { Link, useLocation } from 'react-router-dom';

export const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
         <ul>
          {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Описуємо рендер домашню сторінку 
// Link - посилання на сторінку movies (шлях to={`/movies/${movie.id}`} ) - детальна інформація про фільм
// useLocation - повертає об'ект розміщення, який предствляє поточний URL 