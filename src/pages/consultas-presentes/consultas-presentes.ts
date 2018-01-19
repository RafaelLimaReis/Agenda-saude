import { MenuPage } from './../menu/menu';
import { Network } from '@ionic-native/network';
import { DetalhesConsultaPage } from './../detalhes-consulta/detalhes-consulta';
import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, ModalController } from 'ionic-angular';

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
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public network: Network) {
  this.getConsultaRealizadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPresentesPage');
  }
  openDetalhes(consulta: object) {
    const modal = this.modalCtrl.create(DetalhesConsultaPage,{consulta});
    modal.present();
  }


  getConsultaRealizadas(){
    let connection = this.network.type; //pegar tipo de conexão atual do aparelho

    if ((connection === 'none') || (connection === 'unknown') || (connection === 'ethernet')){
      //setando alert
      let alert = this.alertCtrl.create({
        title: 'Aviso!',
        message: 'Conecte na internet.',
        buttons: [{
          text:'Voltar',
          handler:() =>{
            this.navCtrl.setRoot(MenuPage);
          }
        }]
      });
      alert.present(); //lançando alert
    } else {
      const loading = this.loadController.create({content:'Aguarde...'});
      loading.present(loading);

      return this.apiPrefeitura.getConsultaRealizadasService().subscribe(res =>{
        this.realizadas = res;
        loading.dismiss();
      }, err =>{
        if (err.status === 404){
          let alert = this.alertCtrl.create({
            message: 'Não há Consultas Realizadas.',
            buttons: [{
          text:'Voltar',
          handler:() =>{
            this.navCtrl.setRoot(MenuPage);
          }
        }]
          });
          alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Aviso!',
            message: 'Ocorreu algum problema tente novamente mais tarde.',
            buttons: [{
          text:'Voltar',
          handler:() =>{
            this.navCtrl.setRoot(MenuPage);
          }
        }]
          });
          alert.present();
        }
        loading.dismiss();
      })
    }
  }

  convertTime(time){
    return time.slice(0,5);
  }

}
