export type UserDto = {
  id: number;
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  include_adult?: boolean;
  username?: string;
  avatar?: {
    tmdb?: {
      avatar_path?: string;
    };
  };
};
