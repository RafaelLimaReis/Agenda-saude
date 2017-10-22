import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AjudaPage } from '../ajuda/ajuda';

/**
 * Generated class for the AjudaConsultasAusentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda-consultas-ausentes',
  templateUrl: 'ajuda-consultas-ausentes.html',
})
export class AjudaConsultasAusentesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaConsultasAusentesPage');
  }

  voltarAusentes(){
    this.navCtrl.setRoot(AjudaPage);
  }
}