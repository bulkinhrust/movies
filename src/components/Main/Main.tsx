import { FC, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import { movieStore, userStore } from '../../store';
import MoviesList from '../ui/MoviesList';

const Main: FC = observer(() => {
  const { loading, movies, fetchMovies } = movieStore;
  const { user } = userStore;
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchMovies();
    }
  }, []); // eslint-disable-line

  return (
    <MoviesList isAuth={!!user} loading={loading} movies={movies} />
  );
});

export default Main;
