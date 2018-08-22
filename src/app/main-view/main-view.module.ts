import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { MainViewRoutingModule } from './main-view-routing.module';
import { CungquanghangComponent } from './cungquanghang/cungquanghang.component';
import { ReviewComponent } from './review/review.component';
import { ComposeComponent } from './compose/compose.component';
import { SaccamthanhComponent } from './saccamthanh/saccamthanh.component';

@NgModule({
  imports: [
    CommonModule,
    MainViewRoutingModule
  ],
  declarations: [HomepageComponent, CungquanghangComponent, ReviewComponent, ComposeComponent, SaccamthanhComponent]
})
export class MainViewModule { }
