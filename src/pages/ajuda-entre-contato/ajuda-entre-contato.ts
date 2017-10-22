import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { AjudaPage } from '../ajuda/ajuda';

/**
 * Generated class for the AjudaEntreContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda-entre-contato',
  templateUrl: 'ajuda-entre-contato.html',
})
export class AjudaEntreContatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaEntreContatoPage');
  }

  
  voltarContato(){
    this.navCtrl.setRoot(AjudaPage);
//console.log('aqui');
  }

}
