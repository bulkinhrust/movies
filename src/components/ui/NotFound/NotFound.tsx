import { FC } from 'react';

import classes from './NotFound.module.scss';

const NotFound: FC = () => (
  <div className={classes.component}>
    <span>404</span>
    <span>Страница не найдена</span>
  </div>
);

export default NotFound;
