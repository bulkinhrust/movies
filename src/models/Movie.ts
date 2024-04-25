class Movie {
  id: number;

  title: string;

  originalTitle: string;

  description: string;

  poster: string;

  backdrop: string;

  rating: number;

  genres?: { id: number, name: string }[];

  productionCompanies?: { id: number, name: string }[];

  productionCountries: { name: string, title: string }[];

  runtime: number;

  releaseDate: Date;

  constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.originalTitle = movie.originalTitle;
    this.description = movie.description;
    this.poster = movie.poster;
    this.backdrop = movie.backdrop;
    this.rating = movie.rating;
    this.genres = movie.genres;
    this.productionCompanies = movie.productionCompanies;
    this.productionCountries = movie.productionCountries;
    this.runtime = movie.runtime;
    this.releaseDate = movie.releaseDate;
  }
}

export default Movie;
