import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '../config-service/config.service';
import { AppConstants } from '../../app-constants';
import { User } from '../data-models/User';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': AppConstants.APPLICATION_JSON
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient,
    private _configService: ConfigService) { }

  // create user account (Register)
  createUser(user: User): Observable<User> {
    return this._http
      .post<User>(AppConstants.API_CREATE_USER, user, httpOptions)
      .pipe(catchError(this._configService.handleError));
  }
}
