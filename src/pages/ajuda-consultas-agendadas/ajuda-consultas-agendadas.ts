import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjudaConsultasAgendadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda-consultas-agendadas',
  templateUrl: 'ajuda-consultas-agendadas.html',
})
export class AjudaConsultasAgendadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaConsultasAgendadasPage');
  }

  voltarAgendadas(){
    //console.log('aqui');
    this.viewCtrl.dismiss();
  }
}