import { DetalhesConsultaPage } from './../detalhes-consulta/detalhes-consulta';
import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController , ModalController} from 'ionic-angular';

/**
 * Generated class for the ConsultasAusentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultas-ausentes',
  templateUrl: 'consultas-ausentes.html',
})
export class ConsultasAusentesPage {

  public usuario = JSON.parse(localStorage.getItem('usuario'));
  public ausentes : any = [];

  constructor(public navCtrl: NavController, public apiPrefeitura : apiPrefeitura,
              public loadController: LoadingController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
this.getConsultaAusentes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasAusentesPage');
  }

  openDetalhes(consulta: object) {
    const modal = this.modalCtrl.create(DetalhesConsultaPage,{consulta});
    modal.present();
  }

  getConsultaAusentes(){
    //let cartaoSus = this.usuario[0].cartao_sus;

    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);

    return this.apiPrefeitura.getConsultaAusentesService().subscribe(res =>{
      this.ausentes = res;
      loading.dismiss();
    }, err =>{
      if (err.status === 404){
        let alert = this.alertCtrl.create({
          message: 'Não há Consultas Ausentes.',
          buttons: ['Voltar']
        });
        loading.dismiss();
        alert.present();
      }
      else {
        if(err.status === 408){
          let alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            message: 'Não há conexão com a internet.',
            buttons: ['Voltar']
          });
          loading.dismiss();
          alert.present();
        }
      }
    })
  }

  convertTime(time){
    return time.slice(0,5);
  }
}
