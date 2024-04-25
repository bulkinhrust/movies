import { User } from '../../models/User';
import { UserDto } from './dto/UserDto';

export const mapDtoToUser = (dto: UserDto): User => (
  new User({
    id: dto.id,
    lang: dto.iso_639_1 || '',
    country: dto.iso_3166_1 || '',
    name: dto.name || '',
    includeAdult: !!dto.include_adult,
    username: dto.username || '',
    avatarPath: dto.avatar?.tmdb?.avatar_path || '',
  })
);
