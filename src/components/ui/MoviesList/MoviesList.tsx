import { FC } from 'react';
import { Link } from 'react-router-dom';

import Movie from '../../../models/Movie';
import Button from '../Button';
import Rating from '../Rating';
import Skeleton from '../Skeleton';
import classes from './MoviesList.module.scss';

type Props = {
  isAuth: boolean;
  loading: boolean;
  movies: Movie[];
};

const MoviesList: FC<Props> = (props) => {
  const { isAuth, loading, movies } = props;

  return (
    <div className={classes.list}>
      {loading && Array(12).fill(null).map((_, index) => (
        <Skeleton key={index} width="auto" height="100px" />
      ))}
      {!loading && movies.map((m: Movie) => (
        <Link to={`movie/${m.id}`} key={m.id} className={classes.movie}>
          <div className={classes.image}>
            <img alt={m.title} src={`https://image.tmdb.org/t/p/w500/${m.backdrop}.jpg`} />
            <div className={classes.overlay}>
              <div className={classes.control}>
                {isAuth && <Button
                  icon="bookmark"
                  hint="Добавить в закладки"
                />}
              </div>
              <Rating rating={m.rating} />
            </div>
          </div>
          <span>
            {m.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
