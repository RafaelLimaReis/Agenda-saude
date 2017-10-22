import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the AjudaEntreEmContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda-entre-em-contato',
  templateUrl: 'ajuda-entre-em-contato.html',
})
export class AjudaEntreEmContatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaEntreEmContatoPage');
  }

  voltarContato(){
    //console.log('aqui');
    this.viewCtrl.dismiss();
  }

}
