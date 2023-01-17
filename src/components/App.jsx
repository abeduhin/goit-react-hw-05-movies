import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage/MovieDetailsPage'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// Метод lazy() очікує функцію-завантажувач, яка повертає результат динамічного імпорту - проміс, значенням якого буде дефолтний експорт модуль (компонент) та відповідає за асінхронне завантаження компонента. Suspense призупиняє його відображення до завершення завантаження.

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
// <Routes> має обгортати <Route виконує логіку підбору найбільш відповідного <Route> для поточного значення URL в адресному рядку браузера
// Компонент <Route> дозволяє пов'язати певний URL з деяким компонентом через маршрут та рендерить компонент.
// Спершу рендериться компонет по маршруту по замовчуванню (в нас SharedLayout )
// Компонет HomePage рендериться по індексному маршруту батька.
// Компонет MovieDetailsPage рендериться по вложеному маршруту батька.
// Якщо не один з попередніх маршрутів не підійшов то рендериться компонент NotFound