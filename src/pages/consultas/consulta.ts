import { Network } from '@ionic-native/network';
import { MenuPage } from './../menu/menu';
import { DetalhesConsultaPage } from './../detalhes-consulta/detalhes-consulta';
import { pushNotification } from './../../services/pushNotification';
import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html'
})
export class ConsultaPage {

  public usuario = JSON.parse(localStorage.getItem('usuario'));
  public agendadas : any = [];

  constructor(public navCtrl: NavController, public apiPrefeitura: apiPrefeitura,
               public loadController: LoadingController, public modalCtrl: ModalController,
               public alertCtrl: AlertController,public notification: pushNotification, public network: Network) {
  this.getConsultaAgendadas();

  }

  openDetalhes(consulta: object) {
    const modal = this.modalCtrl.create(DetalhesConsultaPage,{consulta});
    modal.present();
  }

  private getConsultaAgendadas() {
    let connection = this.network.type; //pegar tipo de conexão atual do aparelho

    if ((connection === 'none') || (connection === 'unknown') || (connection === 'ethernet')){
      //setando alert
      let alert = this.alertCtrl.create({
        title: 'Não há conexão com a internet',
        message: 'Deseja exibir as consultas armazenadas em seu aparelho?',
        buttons: [
          {
            text: 'Sim',
            role: 'sim',
            handler: () => {
              this.agendadas = JSON.parse(localStorage.getItem('agendamentos'));
              if (this.agendadas == null) {
                let alert = this.alertCtrl.create({
                  message: 'Não há Consultas Agendadas.',
                  buttons: [{
                    text:'Voltar',
                    handler:() =>{
                      this.navCtrl.setRoot(MenuPage);
                    }
                  }]
                });
                alert.present();
              }
            }
          },
          {
            text: 'Cancelar',
            handler: () => {
              this.navCtrl.setRoot(MenuPage);
            }
          }
        ]
      });
      alert.present(); //lançando alert
    } else {
      const loading = this.loadController.create({content:'Aguarde...'});
      loading.present(loading);
      return this.apiPrefeitura.getConsultaAgendadaService().subscribe(res => {
        this.agendadas = res;
        localStorage.setItem('agendamentos',JSON.stringify(this.agendadas));
        this.notification.createNotification(res);
        loading.dismiss();
        }, err =>{
          if (err.status === 404){
            let alert = this.alertCtrl.create({
              message: 'Não há Consultas Agendadas.',
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
              title: 'Ocorreu algo errado',
              message: 'Deseja exibir as consultas armazenadas em seu aparelho?',
              buttons: [
                {
                  text: 'Sim',
                  role: 'sim',
                  handler: () => {
                    this.agendadas = JSON.parse(localStorage.getItem('agendamentos'));
                    if (this.agendadas == null) {
                      let alert = this.alertCtrl.create({
                        message: 'Não há Consultas Agendadas.',
                        buttons: [{
                          text:'Voltar',
                          handler:() =>{
                            this.navCtrl.setRoot(MenuPage);
                          }
                        }]
                      });
                      alert.present();
                    }
                  }
                },
                {
                  text: 'Cancelar',
                  handler: () => {
                    this.navCtrl.setRoot(MenuPage);
                  }
                }
              ]
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
