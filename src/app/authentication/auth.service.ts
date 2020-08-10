import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { User } from './../_models';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const url = `${environment.url}/tokens`;

    return this._http
      .post(url, { username: username, password: password })
      .pipe(
        map((resp) => {
          let respuesta = resp as any;

          let user = this.getDataUser(respuesta.access_token);

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private getDataToken(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  private getDataUser(token: string): User {
    let data = this.getDataToken(token);

    let user: User = {
      id: 1,
      username: data.username,
      token: token,
    };

    return user;
  }
}
