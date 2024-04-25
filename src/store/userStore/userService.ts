import secureLocalStorage from 'react-secure-storage';

import { User } from '../../models/User';
import { api } from '../api';
import { UserDto } from './dto/UserDto';
import { mapDtoToUser } from './userMapper';

class UserService {
  http = api;

  async checkAuth(): Promise<boolean> {
    if (!secureLocalStorage.getItem('session_id')) {
      return false;
    }
    const res = await this.http.get<{ success: boolean }>('authentication');

    return res.success;
  }

  async getRequestToken(): Promise<string> {
    const res = await this.http.get<{ request_token: string }>('authentication/token/new');
    localStorage.setItem('request_token', res.request_token);
    return res.request_token;
  }

  async getSession(token?: string): Promise<void> {
    const res = await this.http.post('authentication/session/new', {
      request_token: token || localStorage.getItem('request_token'),
    });
    secureLocalStorage.setItem('session_id', res.session_id);
    localStorage.removeItem('request_token');
  }

  async getUser(): Promise<User> {
    const user = await this.http.get<UserDto>('account', {
      params: {
        session_id: secureLocalStorage.getItem('session_id'),
      },
    });

    return mapDtoToUser(user);
  }

  async logout(): Promise<void> {
    await this.http.delete('authentication/session', {
      params: {
        session_id: secureLocalStorage.getItem('session_id'),
      },
    });
    secureLocalStorage.removeItem('session_id');
  }
}

export const userService = new UserService();
