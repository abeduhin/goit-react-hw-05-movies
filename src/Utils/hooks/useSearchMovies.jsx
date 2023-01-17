/* eslint-disable no-unused-vars */
import * as API from '../api/ApiMovie';
import { useState, useEffect } from 'react';

export const useSearchMovies = (input) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.getSearchMovies(input).then(searchMovies => {
      try {
        setIsLoading(true);
        setMovies(searchMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, [input]);
    return { movies };
  });
}
//  Описуємо хук який відповідає за пошук фільма