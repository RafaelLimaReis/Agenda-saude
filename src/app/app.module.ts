import { Login_2Page } from './../pages/login-2/login-2';
import { HttpModule } from '@angular/http';
import { webConfig } from './../webConfig';
import { apiPrefeitura } from './../services/api-prefeitura';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    Login_2Page,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    Login_2Page,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    webConfig,
    apiPrefeitura,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
