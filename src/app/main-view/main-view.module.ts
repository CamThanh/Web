import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';

import { HomepageComponent } from './homepage/homepage.component';
import { CungquanghangComponent } from './cungquanghang/cungquanghang.component';
import { ReviewComponent } from './review/review.component';
import { ComposeComponent } from './compose/compose.component';
import { SaccamthanhComponent } from './saccamthanh/saccamthanh.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    MainViewRoutingModule,
  ],
  declarations: [
    HomepageComponent,
    CungquanghangComponent,
    ReviewComponent,
    ComposeComponent,
    SaccamthanhComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ]
})
export class MainViewModule { }
