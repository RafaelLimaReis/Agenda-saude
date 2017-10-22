import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AjudaConsultasAgendadasPage } from '../ajuda-consultas-agendadas/ajuda-consultas-agendadas';
import { AjudaConsultasAusentesPage } from '../ajuda-consultas-ausentes/ajuda-consultas-ausentes';
import { AjudaConsultasPresentesPage } from '../ajuda-consultas-presentes/ajuda-consultas-presentes';
import { AjudaEntreContatoPage } from '../ajuda-entre-contato/ajuda-entre-contato';
import { AjudaPerfilPage } from '../ajuda-perfil/ajuda-perfil';

/**
 * Generated class for the AjudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda',
  templateUrl: 'ajuda.html',
})
export class AjudaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaPage');
  }
  
  //Rota para abrir tela de Ajuda de Consultas Agendadas
  OpcaoAjudaConsAgendadas(){
    this.navCtrl.setRoot(AjudaConsultasAgendadasPage);
  }
  
  //Rota para abrir tela de Ajuda de Consultas Presentes
  OpcaoAjudaConsPresentes(){
    this.navCtrl.setRoot(AjudaConsultasPresentesPage);
  }

  //Rota para abrir tela de Ajuda de Consultas Ausentes
  OpcaoAjudaConsAusentes(){
    this.navCtrl.setRoot(AjudaConsultasAusentesPage);
  }

  //Rota para abrir tela de Ajuda de Consultas Perfil
  OpcaoAjudaPerfil(){
    this.navCtrl.setRoot(AjudaPerfilPage);
  }
  
  //Rota para abrir tela de Ajuda Entre em Contato
  OpcaoAjudaContato(){
    this.navCtrl.setRoot(AjudaEntreContatoPage);
  }

}
