import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AjudaConsultasPresentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda-consultas-presentes',
  templateUrl: 'ajuda-consultas-presentes.html',
})
export class AjudaConsultasPresentesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaConsultasPresentesPage');
  }

  voltarPresentes(){
    //console.log('sadkjfaskldfjs');
    this.viewCtrl.dismiss();
  }
}
