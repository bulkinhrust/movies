import { makeAutoObservable, runInAction } from 'mobx';

import { User } from '../../models/User';
import { userService } from './userService';

class UserStore {
  user?: User;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async checkAuth() {
    try {
      return await userService.checkAuth();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  async getRequestToken() {
    try {
      return await userService.getRequestToken();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  async getSession(token?: string) {
    try {
      await userService.getSession(token);
      await this.getUser();

      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  async getUser() {
    try {
      const user = await userService.getUser();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  async logout() {
    try {
      await userService.logout();
      this.user = undefined;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}

export const userStore = new UserStore();
