import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ajuda-detalhe',
  templateUrl: 'ajuda-detalhe.html',
})
export class AjudaDetalhePage {

  private help;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.help = this.navParams.get('help');
  }

  ionViewDidLoad() {
    console.log(this.help);
    console.log('ionViewDidLoad AjudaDetalhePage');
  }
}
