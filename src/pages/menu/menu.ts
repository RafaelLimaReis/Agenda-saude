import { ApoioPage } from './../apoio/apoio';
import { AjudaPage } from './../ajuda/ajuda';
import { SolicitarPreAgendamentoPage } from './../solicitar-pre-agendamento/solicitar-pre-agendamento';
import { ConsultasAusentesPage } from './../consultas-ausentes/consultas-ausentes';
import { ConsultasPresentesPage } from './../consultas-presentes/consultas-presentes';
import { ConsultaPage } from './../consultas/consulta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  consultaAgendada(){
    this.navCtrl.setRoot(ConsultaPage);
  }

  consultaRealizada(){
    this.navCtrl.setRoot(ConsultasPresentesPage);
  }

  consultaAusente(){
    this.navCtrl.setRoot(ConsultasAusentesPage);
  }

  preAgendamento(){
    this.navCtrl.setRoot(SolicitarPreAgendamentoPage);
  }

  ajuda(){
    this.navCtrl.setRoot(AjudaPage);
  }

  apoio(){
    this.navCtrl.setRoot(ApoioPage);
  }

}
