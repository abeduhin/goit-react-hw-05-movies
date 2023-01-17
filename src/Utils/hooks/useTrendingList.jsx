import { getTrending } from '../api/ApiMovie';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(trList => setTrendingMovies(trList));
  }, []);

  return { trendingMovies };
};  
// Описуємо хук який загружає список трендових фільмів для головної сторінки