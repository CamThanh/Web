import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './data-services/auth.service';
import { ConfigService } from './config-service/config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ConfigService,
    AuthService
  ]
})
export class CoreModule { }
