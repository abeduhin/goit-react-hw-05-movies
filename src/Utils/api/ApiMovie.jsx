import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9e6afb981eabd9c0b16e6cda6eacb393';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results.map(({ id, title }) => { 
  return {
      id,
      title,
    };
   
  });
  
 };

// getTrending - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// Створюємо API запит через HTTP клієнта axios 
// Перебираэмо відповідь та получаємо доступ до параметрів id та title

export const getSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};
// getSearchMovies - пошук фільму за ключовим словом на сторінці фільмів

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
// getMovieDetails - запит повної інформації про фільм для сторінки кінофільму.


export const getMovieCredits = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

// getMovieCredits - запит інформації про акторський склад для сторінки кінофільму.

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};
// getMoviesReviews - запит оглядів для сторінки кінофільму.