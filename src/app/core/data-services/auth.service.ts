import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Token } from '../data-models/Token';
import { AppConstants } from '../../app-constants';

let authToken = btoa(AppConstants.CLIENT_ID + ":" + AppConstants.CLIENT_SECRET);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : AppConstants.FORM_URLENCODED,
    'Authorization' : 'Basic ' + authToken
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login api to get token
  login(username: string, password: string): Observable<Token> {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post<Token>(AppConstants.API_TOKEN, body.toString(), httpOptions);
  }
}
