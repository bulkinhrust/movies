import { makeAutoObservable, runInAction } from 'mobx';

import Movie from '../../models/Movie';
import { movieService } from './movieService';

class MovieStore {
  loading = false;

  movies: Movie[] = [];

  movie?: Movie;

  page = 1;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setPage(page: number) {
    this.page = page;
  }

  async fetchMovies() {
    try {
      this.setLoading(true);
      const movies: Movie[] = await movieService.fetchMovies();

      runInAction(() => {
        this.movies = movies;
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      this.setLoading(false);
    }
  }

  async fetchMovie(id: string) {
    try {
      this.setLoading(true);
      const movie: Movie = await movieService.fetchMovie(id);

      runInAction(() => {
        this.movie = movie;
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      this.setLoading(false);
    }
  }

  clearMovie() {
    this.movie = undefined;
  }
}

export const movieStore = new MovieStore();
