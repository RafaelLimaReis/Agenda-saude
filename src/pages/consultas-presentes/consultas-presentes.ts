import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, , AlertController } from 'ionic-angular';

/**
 * Generated class for the ConsultasPresentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultas-presentes',
  templateUrl: 'consultas-presentes.html',
})
export class ConsultasPresentesPage {

  public usuario = JSON.parse(localStorage.getItem('usuario'));
  public realizadas : any = [];

  constructor(public navCtrl: NavController, public apiPrefeitura : apiPrefeitura,
              public loadController: LoadingController,
              public alertCtrl: AlertController) {
  this.getConsultaRealizadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPresentesPage');
  }

  getConsultaRealizadas(){
    let cartaoSus = this.usuario[0].cartao_sus;

    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);

    return this.apiPrefeitura.getConsultaAgendadaService(cartaoSus).subscribe(res =>{
      this.realizadas = res.data;
      loading.dismiss();
    }, err =>{
      if(err.status === 408){
        let alert = this.alertCtrl.create({
          title: 'Ocorreu um erro!',
          message: 'Não há conexão com a internet.',
          buttons: ['Voltar']
        });
        loading.dismiss();
        alert.present();
      }
    })
  }

  convertTime(time){
    return time.slice(0,5);
  }

}
