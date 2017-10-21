import { DetalhesAgendadaPage } from './../detalhes-agendada/detalhes-agendada';
import { pushNotification } from './../../services/pushNotification';
import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = JSON.parse(localStorage.getItem('usuario'));
  public agendadas : any = [];

  constructor(public navCtrl: NavController, public apiPrefeitura: apiPrefeitura,
               public loadController: LoadingController, public modalCtrl: ModalController,
               public alertCtrl: AlertController,public notification: pushNotification) {
  this.getConsultaAgendadas();

  }

  openDetalhes(id: number) {
    let consultaDetalhe = this.agendadas.filter(
      consulta => consulta.id === id
    );

    const modal = this.modalCtrl.create(DetalhesAgendadaPage,{consultaDetalhe});
    modal.present();
  }

  private getConsultaAgendadas() {
    let cartaoSus = this.usuario[0].cartao_sus;
    
    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
     return this.apiPrefeitura.getConsultaAgendadaService(cartaoSus).subscribe(res =>{
       this.agendadas = res.data;
       console.log(res);
       localStorage.setItem('agendamentos',JSON.stringify(this.agendadas));
       this.notification.createNotification(res.data);
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
              title: 'Não há conexão com a internet',
              message: 'Deseja exibir as consultas armazenadas em seu aparelho ? ',
              buttons: [
                {
                  text: 'Sim',
                  role: 'sim',
                  handler: () => {
                    this.agendadas = JSON.parse(localStorage.getItem('agendamentos'));
                  }
                },
                {
                  text: 'Cancelar',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                }
              ]
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
