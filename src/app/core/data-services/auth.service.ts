import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Token } from '../data-models/Token';
import { AppConstants } from '../../app-constants';
import { Router } from '@angular/router';

let AUTHTOKEN = btoa(AppConstants.CLIENT_ID + ":" + AppConstants.CLIENT_SECRET);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': AppConstants.FORM_URLENCODED,
    'Authorization': 'Basic ' + AUTHTOKEN
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() loginState: EventEmitter<any> = new EventEmitter();

  private _isLoggedIn: boolean;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  constructor(private _http: HttpClient,
    private _router: Router) { }

  // login api to get token
  login(username: string, password: string): Observable<Token> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

    return this._http.post<Token>(AppConstants.API_TOKEN, body.toString(), httpOptions)
      .pipe(
        map(responseToken => {
          if (responseToken && responseToken.access_token) {
            localStorage.setItem('current_user', JSON.stringify(responseToken));
            this.loginState.emit(true);
          }
          return responseToken;
        })
      );
  }

  // logout
  logout(): void {
    // remove user from local storage to log user out
    this.loginState.emit(false);
    this.isLoggedIn = false;
    localStorage.removeItem('current_user');
    sessionStorage.removeItem('social_user');
    this._router.navigate(['/homepage']);
  }

  checkLogInState() {
    let socialUser = JSON.parse(sessionStorage.getItem('social_user'));
    let ctUser = JSON.parse(localStorage.getItem('current_user'));
    if (socialUser || ctUser) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
