import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { movieStore } from '../../store';
import NotFound from '../ui/NotFound';
import Spinner from '../ui/Spinner';
import classes from './Movie.module.scss';

const Movie: FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { clearMovie, loading, movie, fetchMovie } = movieStore;

  useEffect(() => {
    fetchMovie(id);

    return () => {
      clearMovie();
    };
  }, [id]); // eslint-disable-line

  if (loading) {
    return <div className={classes.loading}>
      <Spinner color="var(--main-accent)" />
    </div>;
  }

  if (!loading && !movie) {
    return <NotFound />;
  }

  return (
    <div className={classes.component}>
      <img
        className={classes.poster}
        alt={movie?.title}
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster}.jpg`}
      />
      <div className={classes.content}>
        <h2>{movie.title}</h2>
        <div className={classes.contentRow}>
          <span>Оригинальное название</span>
          <span>{movie.originalTitle}</span>
        </div>
        <div className={classes.contentRow}>
          <span>Год производства</span>
          <span>{movie.releaseDate.getFullYear()}</span>
        </div>
        <div className={classes.contentRow}>
          <span>Страна</span>
          <span>{movie.productionCountries.map(({ title }) => title).join(', ')}</span>
        </div>
        <div className={classes.contentRow}>
          <span>Компания</span>
          <span>{movie.productionCompanies.map(({ name }) => name).join(', ')}</span>
        </div>
        <div className={classes.contentRow}>
          <span>Жанр</span>
          <span>{movie.genres.map(({ name }) => name).join(', ')}</span>
        </div>
        <div className={classes.contentRow}>
          <span>Время</span>
          <span>{Math.floor(movie.runtime / 60)}:{movie.runtime % 60}</span>
        </div>
        <div className={classes.contentRow}>
          <span>Описание</span>
          <span>{movie.description}</span>
        </div>
      </div>
    </div>
  );
});

export default Movie;
