import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "../data-services/auth.service";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  
  constructor(private _authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((errorResponse: HttpErrorResponse) => {
      if (errorResponse.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred: ', errorResponse.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${errorResponse.status},` +
          `body was: ${JSON.stringify(errorResponse.error)}`);
        if (errorResponse.status === 401) {
          // auto logout if 401 response returned from api
          // this._authService.logout();
          // location.reload(true);
        }
      }
      const error = errorResponse.message ? errorResponse.message : errorResponse.toString();
      return throwError(error);
    }))
  }
}