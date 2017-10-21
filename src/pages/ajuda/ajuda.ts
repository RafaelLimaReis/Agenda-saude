import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AjudaConsultasAgendadasPage } from '../ajuda-consultas-agendadas/ajuda-consultas-agendadas';
import { AjudaConsultasPresentesPage } from '../ajuda-consultas-presentes/ajuda-consultas-presentes';
import { AjudaConsultasAusentesPage } from '../ajuda-consultas-ausentes/ajuda-consultas-ausentes';
import { AjudaEntreEmContatoPage } from '../ajuda-entre-em-contato/ajuda-entre-em-contato';

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
  ionOpcaoAjudaConsAgendadas(){
    let modal = this.modalCtrl.create('AjudaConsultasAgendadasPage');
    modal.present();
  }
  
  //Rota para abrir tela de Ajuda de Consultas Presentes
  ionOpcaoAjudaConsPresentes(){
    let modal = this.modalCtrl.create('AjudaConsultasPresentesPage');
    modal.present();
  }

  //Rota para abrir tela de Ajuda de Consultas Ausentes
  ionOpcaoAjudaConsAusentes(){
    let modal = this.modalCtrl.create('AjudaConsultasAusentesPage');
    modal.present();
  }

  //Rota para abrir tela de Ajuda de Consultas Perfil
  ionOpcaoAjudaPerfil(){
    let modal = this.modalCtrl.create('AjudaPerfilPage');
    modal.present();
  }
  
  //Rota para abrir tela de Ajuda Entre em Contato
  ionOpcaoAjudaContato(){
    let modal = this.modalCtrl.create('AjudaEntreEmContatoPage');
    modal.present();
  }

}
