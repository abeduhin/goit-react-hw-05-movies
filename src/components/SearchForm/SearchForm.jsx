/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../Utils/api/ApiMovie';
import { useEffect, useState } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    setSearchParams({ query: e.target[0].value });
    e.preventDefault();
    return;
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      getSearchMovies(movieTitle).then(searchMovies => {
        try {
          setIsLoading(true);
          setMovies(searchMovies);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      });     
    }
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList movies={movies} />
    </div>
  );
};
// Компонент який рендерить список фільмів по пошуку
// useSearchParams - читає та змінює строки запита
// useParams повертає об'єкт з усіма динамичиними параметрами, які є в поточному URL