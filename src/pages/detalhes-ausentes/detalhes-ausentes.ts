import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalhesAusentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-ausentes',
  templateUrl: 'detalhes-ausentes.html',
})
export class DetalhesAusentesPage {

  public consulta = this.navParams.get('consulta');

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesAusentesPage');
  }

  voltarAusentes(){
    this.viewCtrl.dismiss();
  }

  convertTime(time){
    return time.slice(0,5);
  }

}
