import { useTrendingList } from '../../Utils/hooks/useTrendingList';
import { TrendingList } from 'components/TrendingList/TrendingList';

const HomePage = () => {

  const { trendingMovies }  = useTrendingList();
  return (
   <main>
            <div>
                <h1>Trending today</h1>
            </div>
    <div>
      <TrendingList movies={trendingMovies} />
      </div>
      </main>
  );
}
export default HomePage;
// Описуємо домашню сторінку - рендер з TrendingList - список фільмів з useTrendingList