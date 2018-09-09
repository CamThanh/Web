import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MainViewRoutingModule } from './main-view-routing.module';

import { HomepageComponent } from './homepage/homepage.component';
import { CungquanghangComponent } from './cungquanghang/cungquanghang.component';
import { ReviewComponent } from './review/review.component';
import { ComposeComponent } from './compose/compose.component';
import { SaccamthanhComponent } from './saccamthanh/saccamthanh.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { VipComponent } from './vip/vip.component';
import { TuyendungComponent } from './tuyendung/tuyendung.component';

@NgModule({
  imports: [
    CommonModule,
    MainViewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomepageComponent,
    CungquanghangComponent,
    ReviewComponent,
    ComposeComponent,
    SaccamthanhComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    VipComponent,
    TuyendungComponent
  ]
})
export class MainViewModule { }
