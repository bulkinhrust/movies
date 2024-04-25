export class User {
  id: number;

  lang: string;

  country: string;

  name: string;

  includeAdult: boolean;

  username: string;

  avatarPath: string;

  constructor(user: User) {
    this.id = user.id;
    this.lang = user.lang;
    this.country = user.country;
    this.name = user.name;
    this.includeAdult = user.includeAdult;
    this.username = user.username;
    this.avatarPath = user.avatarPath;
  }
}
