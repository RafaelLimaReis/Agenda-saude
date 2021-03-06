import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { DetalhesRealizadaPage } from '../detalhes-realizada/detalhes-realizada';

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
              public modalCtrl: ModalController) {
  this.getConsultaRealizadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPresentesPage');
  }
  openDetalhes(id: number) {
    let consultaDetalhe = this.realizadas.filter(
      consulta => consulta.id === id
    );
    
    const modal = this.modalCtrl.create(DetalhesRealizadaPage,{consultaDetalhe});
    modal.present();
  }


  getConsultaRealizadas(){
    let cartaoSus = this.usuario[0].cartao_sus;

    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);

    return this.apiPrefeitura.getConsultaRealizadasService(cartaoSus).subscribe(res =>{
      this.realizadas = res.data;
      loading.dismiss(); 
    }, err =>{
      if (err.status === 404){
        let alert = this.alertCtrl.create({
          message: 'Não há Consultas Realizadas.',
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
