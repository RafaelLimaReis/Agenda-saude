import { Login_2Page } from './../pages/login-2/login-2';
import { LoginPage } from './../pages/login/login';
import { AjudaPage } from './../pages/ajuda/ajuda';
import { PerfilPage } from './../pages/perfil/perfil';
import { ConsultasAusentesPage } from './../pages/consultas-ausentes/consultas-ausentes';
import { ConsultasPresentesPage } from './../pages/consultas-presentes/consultas-presentes';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  pages: [{title: string, icon: string, Component: any}];
  public usuario = JSON.parse(localStorage.getItem('usuario'));
  //rootpage pra dev 
  // rootPage:any = HomePage;

  public cartaoSus = this.usuario[0].cartao_sus;
  public nome = this.usuario[0].nome;

  //rootpage prod
  rootPage:any = this.verificar();
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {title: 'Consultas Agendadas', icon:'calendar', Component:HomePage},
      {title: 'Consultas Realizadas', icon:'calendar-check-o', Component:ConsultasPresentesPage},
      {title: 'Consultas Ausentes', icon:'calendar-times-o', Component:ConsultasAusentesPage},
      {title: 'Perfil', icon:'user-circle-o', Component:PerfilPage},
      {title: 'Ajuda', icon:'info-circle', Component:AjudaPage},
      {title: 'Sair', icon:'sign-out', Component:LoginPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();   
    });
  }


  openPage(p: {title: string, icon:string, Component: any}): void {
    this.nav.setRoot(p.Component);
  }

  //logica de validação
  verificar(){
    let usuario = JSON.parse(localStorage.getItem('usuario'));
  
    if ((usuario != null) && (usuario[0].flag === true)){
      return HomePage;
    } else{
      return  LoginPage;
    }
  }
}

