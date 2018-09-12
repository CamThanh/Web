import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './layouts/main-layout/header/header.component';
import { FooterComponent } from './layouts/main-layout/footer/footer.component';
import { AuthComponent } from './main-view/auth/auth.component';

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angular-6-social-login";
import { AppConstants } from './app-constants';

// Configs Social Login
export function getSocialAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(AppConstants.FACEBOOK_APP_ID)
      }
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    CoreModule,
    SocialLoginModule
  ],
  entryComponents: [
    AuthComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getSocialAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
