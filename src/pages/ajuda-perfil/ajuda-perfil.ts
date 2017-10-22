import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AjudaPage } from '../ajuda/ajuda';

/**
 * Generated class for the AjudaPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajuda-perfil',
  templateUrl: 'ajuda-perfil.html',
})
export class AjudaPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjudaPerfilPage');
  }

  voltarPerfil(){
    this.navCtrl.setRoot(AjudaPage);
  }
}