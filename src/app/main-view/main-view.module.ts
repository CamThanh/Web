import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';

import { HomepageComponent } from './homepage/homepage.component';
import { CungquanghangComponent } from './cungquanghang/cungquanghang.component';
import { ReviewComponent } from './review/review.component';
import { ComposeComponent } from './compose/compose.component';
import { SaccamthanhComponent } from './saccamthanh/saccamthanh.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    LoginComponent,
    RegisterComponent
  ]
})
export class MainViewModule { }
