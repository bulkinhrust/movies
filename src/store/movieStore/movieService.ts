import Movie from '../../models/Movie';
import { api } from '../api';
import { mapDtoToMovie } from './movieMapper';
import { MovieDto } from './dto/MovieDto';

class MovieService {
  async fetchMovies(): Promise<Movie[]> {
    const { results } = await api.get<{ results: MovieDto[] }>('discover/movie', {
      params: {
        include_adult: false,
        include_video: false,
        page: 1,
        sort_by: 'popularity.desc',
      },
    });

    return results?.map(mapDtoToMovie) || [];
  }

  async fetchMovie(id: string): Promise<Movie> {
    const res = await api.get<MovieDto>(`movie/${id}`);

    return mapDtoToMovie(res);
  }
}

export const movieService = new MovieService();
