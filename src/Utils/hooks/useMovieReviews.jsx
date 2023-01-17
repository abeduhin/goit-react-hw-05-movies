import {getMoviesReviews} from '../api/ApiMovie';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId).then(movRev => setReviews(movRev));
  }, [movieId]);
  return { movieReviews };
};
//  Описуємо хук який відповідає за відгуки про фільм