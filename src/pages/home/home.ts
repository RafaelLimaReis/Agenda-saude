import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = JSON.parse(localStorage.getItem('usuario'));
  public agendadas : any = [];

  constructor(public navCtrl: NavController, public apiPrefeitura: apiPrefeitura,
               public loadController: LoadingController,
               public alertCtrl: AlertController) {
  this.getConsultaAgendadas();

  }

  private getConsultaAgendadas() {
    let cartaoSus = this.usuario[0].cartao_sus;
    
    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
     return this.apiPrefeitura.getConsultaAgendadaService(cartaoSus).subscribe(res =>{
       this.agendadas = res.data;
       localStorage.setItem('agendamentos',JSON.stringify(this.agendadas));
       loading.dismiss(); 
      }, err =>{
        if (err.status === 404){
          let alert = this.alertCtrl.create({
            message: 'Não há Consultas Agendadas.',
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
