import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: Http) { }

  login(userName: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const loginInfo = { username: userName, password: password };

    return this.http.post('/api/login', JSON.stringify(loginInfo), options)
      .do(response => {
      if (response) {
        this.currentUser = <IUser>response.json().user;
      }
    }).catch(error => {
      return Observable.of(false);
    });
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity')
      .map((response: any) => {
        if (response._body) {
          return response.json();
        } else {
          return {};
        }
      })
      .do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      })
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser = Object.assign({}, this.currentUser, { firstName, lastName });

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
  }

  logout() {
    this.currentUser = undefined;

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.http.post('/api/logout', JSON.stringify({}), options);
  }
}
