import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: IUser;

  login(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser = Object.assign({}, this.currentUser, { firstName, lastName });
  }
}
