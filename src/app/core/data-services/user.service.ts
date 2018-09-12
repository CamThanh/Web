import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AppConstants } from '../../app-constants';
import { User } from '../data-models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': AppConstants.APPLICATION_JSON
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  // create user account (Register)
  createUser(user: User): Observable<User> {
    let requestBody = JSON.stringify(user);
    return this._http.post<User>(AppConstants.API_CREATE_USER, requestBody, httpOptions);
  }
}
