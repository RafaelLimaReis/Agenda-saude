import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalhesRealizadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-realizada',
  templateUrl: 'detalhes-realizada.html',
})
export class DetalhesRealizadaPage {

  public consulta = this.navParams.get('consultaDetalhe');
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesRealizadaPage');
  }

 
  voltarRealizadas(){
    this.viewCtrl.dismiss();
  }

  convertTime(time){
    return time.slice(0,5);
  }

}
