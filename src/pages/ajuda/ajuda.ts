import { AjudaDetalhePage } from './../ajuda-detalhe/ajuda-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular'
import { AjudaEntreContatoPage } from '../ajuda-entre-contato/ajuda-entre-contato';

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

  public helpDescription = [{
    title:'Consulta Agendada',
    description:'O Menu de Consultas Agendadas permite que você visualize suas consultas marcadas, com suas devidas datas e horários.'
  },
  {
   title:'Consultas Ausentes',
   description:'O menu de Consultas Ausentes permite que você visualize suas consultas marcadas, na qual não foi comparecido nas datas e horários agendados.'
  },
  {
    title:'Consultas Presentes',
    description:'O menu de Consultas Presentes permite que você visualize suas consultas em que você compareceu na unidade.'
  },
  {
  title:'Perfil',
  description:'O menu de Perfil mostra á você os dados cadastrais que foram preenchidos na U.B.S.' +
              'Caso os seus dados estejam desatualizados ou queira complementá-los, dirija-se por gentileza a U.B.S mais' +
              'próxima de você e atualize o seu cadastro!.'
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaPage');
  }

  //Rota para abrir tela de Ajuda de Consultas Agendadas
  OpcaoAjudaConsAgendadas(){
    const modal = this.modalCtrl.create(AjudaDetalhePage, {help: this.helpDescription[0]});
    modal.present();
  }

  //Rota para abrir tela de Ajuda de Consultas Presentes
  OpcaoAjudaConsPresentes(){
    const modal = this.modalCtrl.create(AjudaDetalhePage, {help: this.helpDescription[1]});
    modal.present();
  }

  //Rota para abrir tela de Ajuda de Consultas Ausentes
  OpcaoAjudaConsAusentes(){
    const modal = this.modalCtrl.create(AjudaDetalhePage, {help: this.helpDescription[2]});
    modal.present();
  }

  //Rota para abrir tela de Ajuda de Consultas Perfil
  OpcaoAjudaPerfil(){
    const modal = this.modalCtrl.create(AjudaDetalhePage, {help: this.helpDescription[3]});
    modal.present();
  }

  //Rota para abrir tela de Ajuda Entre em Contato
  OpcaoAjudaContato(){
    this.navCtrl.setRoot(AjudaEntreContatoPage);
  }

}
