import { AjudaDetalhePage } from './../pages/ajuda-detalhe/ajuda-detalhe';
import { HelpDescriptionComponent } from './../components/help-description/help-description';
import { DetalhesConsultaPage } from './../pages/detalhes-consulta/detalhes-consulta';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { pushNotification } from './../services/pushNotification';

import { Login_2Page } from './../pages/login-2/login-2';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
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
import { ConsultaPage } from '../pages/consultas/consulta';
import { ApoioPage } from '../pages/apoio/apoio';

import { SolicitarPreAgendamentoPage } from '../pages/solicitar-pre-agendamento/solicitar-pre-agendamento';
import { AjudaEntreContatoPage } from '../pages/ajuda-entre-contato/ajuda-entre-contato';

@NgModule({
  declarations: [
    FaIconComponent,
    MyApp,
    LoginPage,
    ConsultasPresentesPage,
    ConsultasAusentesPage,
    PerfilPage,
    AjudaPage,
    Login_2Page,
    ConsultaPage,
    SolicitarPreAgendamentoPage,
    AjudaDetalhePage,
    AjudaEntreContatoPage,
    DetalhesConsultaPage,
    ApoioPage,
    HelpDescriptionComponent
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
    Login_2Page,
    ConsultaPage,
    SolicitarPreAgendamentoPage,
    AjudaDetalhePage,
    AjudaEntreContatoPage,
    DetalhesConsultaPage,
    ApoioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    webConfig,
    apiPrefeitura,
    pushNotification,
    Network,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
