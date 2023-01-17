import { getMovieCredits } from '../api/ApiMovie';
import { useState, useEffect } from 'react';

export const useMovieCredits = (movieId) => {
  const [movieCredits, setMovieCredits] = useState([]);
  

  useEffect(() => {
    getMovieCredits(movieId).then(movCred => 
      setMovieCredits(movCred));
  }, [movieId]);
  return { movieCredits };
};
// Описуємо кастомний хук який відповідає за список акторів