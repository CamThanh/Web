import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Token } from '../data-models/Token';
import { AppConstants } from '../../app-constants';
import { ConfigService } from '../config-service/config.service';

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

  constructor(private http: HttpClient, private configService: ConfigService) { }

  // login api to get token
  login(username: string, password: string): Observable<Token> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

    return this.http.post<Token>(AppConstants.API_TOKEN, body.toString(), httpOptions)
      .pipe(
        catchError(this.configService.handleError)
      );
  }
}
