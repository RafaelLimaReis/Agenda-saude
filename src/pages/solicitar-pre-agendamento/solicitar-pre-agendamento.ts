import { MenuPage } from './../menu/menu';
import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the SolicitarPreAgendamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitar-pre-agendamento',
  templateUrl: 'solicitar-pre-agendamento.html',
})
export class SolicitarPreAgendamentoPage {
  id:any;
  motivo:any;
  public especialidade = [];
  public motivos = [];
  public dados;


  constructor(public alertCtrl:AlertController, public navCtrl: NavController, public loadController: LoadingController, public navParams: NavParams, public viewCtrl: ViewController, public apiPrefeitura: apiPrefeitura) {
    this.buscaDados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitarPreAgendamentoPage');
  }

  private alertError(def = 0) {
    let message;
    if (def == 0) {
      message = 'Ocorreu algum problema tente novamente mais tarde.';
    } else {
      message = 'Não foi encontrado nenhum motivo para essa especialidade.';
    }

    let alert = this.alertCtrl.create({
      title: 'Aviso!',
      message: message,
      buttons: [{
        text:'Voltar',
        handler:() =>{
          this.navCtrl.setRoot(MenuPage);
        }
      }]
    });

    return alert;
  }

  buscaDados(){
    let alert = this.alertError();

    let loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
    this.apiPrefeitura.getDadosCadastroService().subscribe(res => {
      if (res == null) {
        alert.present();
      } else {
        this.especialidade = res;
      }
    }, err => {
      alert.present();
    });
    loading.dismiss();

  }

  filtrarMotivo(id:number) {
    let alert = this.alertError();

    let loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
    this.apiPrefeitura.getMotivosCadastroService(id).subscribe(res => {
      if (res == null) {
        alert = this.alertError(1);
        alert.present();
      } else {
        this.motivos = res;
      }
    }, err => {
      alert.present();
    })
    loading.dismiss();
  }

  salvar(){
    let carregar = this.loadController.create({content:'Aguarde...'});
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    this.dados = {'paciente':{'id':232609}, 'especialidade':{'id':this.id}, 'motivoAgendamento':{'id':this.motivo}}

    carregar.present(carregar);
    this.apiPrefeitura.solicitarPreAgendamento(this.dados).subscribe(res => {
      let alert = this.alertCtrl.create({
        title: 'Tudo ok!',
        message: 'Pré consulta cadastrada com sucesso.',
        buttons: [{
          text:'Voltar',
          handler:() =>{
            this.navCtrl.setRoot(MenuPage);
          }
        }]
      });
      alert.present();
    }, err => {
      if (err.status === 409) {
        let alert = this.alertCtrl.create({
          title: 'Aviso!',
          message: 'Você já têm um pré-agendamento solicitado.',
          buttons: [{
            text:'Voltar',
            handler:() =>{
              this.navCtrl.setRoot(MenuPage);
            }
          }]
        });
        alert.present();
      } else {
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
    });
    carregar.dismiss();
  }

}
