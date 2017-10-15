
import { HttpModule } from '@angular/http';
import { webConfig } from './../webConfig';
import { apiPrefeitura } from './../services/api-prefeitura';

import { FaIconComponent } from './../components/fa-icon/fa-icon.component';
import { AjudaPage } from './../pages/ajuda/ajuda';
import { PerfilPage } from './../pages/perfil/perfil';
import { ConsultasAusentesPage } from './../pages/consultas-ausentes/consultas-ausentes';
import { ConsultasPresentesPage } from './../pages/consultas-presentes/consultas-presentes';


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
    FaIconComponent,
    MyApp,
    LoginPage,
    ConsultasPresentesPage,
    ConsultasAusentesPage,
    PerfilPage,
    AjudaPage,
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
    ConsultasPresentesPage,
    ConsultasAusentesPage,
    PerfilPage,
    AjudaPage,
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
