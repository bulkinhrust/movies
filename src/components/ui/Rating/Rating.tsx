import clsx from 'clsx';
import { FC } from 'react';

import classes from './Rating.module.scss';

type Props = {
  rating: number;
};

const Rating: FC<Props> = (props) => {
  const { rating } = props;

  return (
    <div
      className={clsx(
        classes.rating,
        {
          [classes.bad]: rating < 5,
          [classes.normal]: rating >= 5 && rating < 6.5,
          [classes.good]: rating >= 6.5 && rating <= 8,
          [classes.great]: rating > 8,
        },
      )}
    >
      {rating.toFixed(1)}
    </div>
  );
};

export default Rating;
