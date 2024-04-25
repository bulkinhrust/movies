export type MovieDto = {
  adult?: boolean;
  backdrop_path? : string;
  genre_ids?: number[],
  genres?: { id: number, name: string }[],
  production_companies?: { id: number, name: string }[],
  production_countries?: { iso_3166_1: string, name: string }[],
  id: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: string,
  runtime?: number,
  title: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
};
