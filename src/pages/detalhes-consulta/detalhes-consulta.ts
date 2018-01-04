import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the DetalhesConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-cosulta',
  templateUrl: 'detalhes-consulta.html',
})
export class DetalhesConsultaPage {

  public consulta = this.navParams.get('consulta');

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesAgendadaPage');
    console.log(this.consulta);
  }

  voltarAgendadas(){
    this.viewCtrl.dismiss();
  }

  convertTime(time){
    return time.slice(0,5);
  }

}
