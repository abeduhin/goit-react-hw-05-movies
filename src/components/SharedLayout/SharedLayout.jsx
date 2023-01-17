import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './SharedLayout.module.css'
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.link} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.link} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
// Описуємо рендер компонента SharedLayout - спільне для всіх сторінок (коннейнер в якому хедер в якому блок навігації)
// Suspense - зупиняє до закінчення загрузки (поки загрузка спинер)
// NavLink посилання на сторінку (по замовчуванню актів)
// Outlet - показує місце де у батька михочемо рендерити дочірні маршрути.