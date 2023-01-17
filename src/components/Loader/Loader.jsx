import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <Grid
            height="80"
            width="80"
            color="rgb(192, 192, 192)"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            visible={true}
    />
  </div>
);
// Спинер