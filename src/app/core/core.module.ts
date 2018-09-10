import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './data-services/auth.service';
import { ConfigService } from './config-service/config.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ConfigService,
    AuthService
  ]
})
export class CoreModule { }
