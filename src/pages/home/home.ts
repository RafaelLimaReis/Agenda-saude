import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = JSON.parse(localStorage.getItem('usuario'));
  public agendadas : any = [];

  constructor(public navCtrl: NavController, public apiPrefeitura: apiPrefeitura,
               public loadController: LoadingController) {
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
     }, err => {
       if(err.status === 408){
        this.agendadas = JSON.parse(localStorage.getItem('agendamentos'));
        loading.dismiss(); 
       }
     })
  }

  

  convertTime(time){
    return time.slice(0,5);
  }
  
}
