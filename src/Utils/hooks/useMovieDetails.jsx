import {getMovieDetails} from '../api/ApiMovie';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId).then(movDetail => setMovieDetails(movDetail));
  }, [movieId]);

  return { movieDetails };
};
//  Описуємо хук який відповідає за детальнк інформацію про фільм