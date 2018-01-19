
import { AjudaDetalhePage } from './../pages/ajuda-detalhe/ajuda-detalhe';
import { HelpDescriptionComponent } from './../components/help-description/help-description';

import { MenuPage } from './../pages/menu/menu';

import { DetalhesConsultaPage } from './../pages/detalhes-consulta/detalhes-consulta';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { pushNotification } from './../services/pushNotification';

import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { webConfig } from './../webConfig';
import { apiPrefeitura } from './../services/api-prefeitura';

import { FaIconComponent } from './../components/fa-icon/fa-icon.component';
import { AjudaPage } from './../pages/ajuda/ajuda';
import { PerfilPage } from './../pages/perfil/perfil';
import { ConsultasAusentesPage } from './../pages/consultas-ausentes/consultas-ausentes';
import { ConsultasPresentesPage } from './../pages/consultas-presentes/consultas-presentes';

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
    ConsultasPresentesPage,
    ConsultasAusentesPage,
    PerfilPage,
    AjudaPage,
    ConsultaPage,
    SolicitarPreAgendamentoPage,
    AjudaDetalhePage,
    AjudaEntreContatoPage,
    DetalhesConsultaPage,
    ApoioPage,
    HelpDescriptionComponent,
    MenuPage,
    ApoioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'voltar',
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsultasPresentesPage,
    ConsultasAusentesPage,
    PerfilPage,
    AjudaPage,
    ConsultaPage,
    SolicitarPreAgendamentoPage,
    AjudaDetalhePage,
    AjudaEntreContatoPage,
    DetalhesConsultaPage,
    MenuPage,
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
