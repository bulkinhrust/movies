import Movie from '../../models/Movie';
import { MovieDto } from './dto/MovieDto';

export const mapDtoToMovie = (dto: MovieDto): Movie => (
  new Movie({
    id: dto.id,
    title: dto.title,
    originalTitle: dto.original_title || '',
    description: dto.overview || '',
    poster: dto.poster_path || '',
    backdrop: dto.backdrop_path || '',
    rating: +dto.vote_average || 0,
    genres: dto.genres || [],
    productionCompanies: dto.production_companies || [],
    productionCountries: (dto.production_countries || []).map((country) => ({
      name: country.iso_3166_1,
      title: country.name,
    })),
    runtime: dto.runtime || 0,
    releaseDate: new Date(dto.release_date || 0),
  })
);
