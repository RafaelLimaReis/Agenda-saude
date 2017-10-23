import { HomePage } from './../home/home';
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

  buscaDados(){
    let loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
    this.apiPrefeitura.getDadosCadastroService().subscribe(res => {
      this.especialidade = res.data;
    });
    loading.dismiss();
  }

  filtrarMotivo(id:number) {
    let loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
    this.apiPrefeitura.getMotivosCadastroService(id).subscribe(res => {
      this.motivos = res.data;
      console.log(this.motivos);
    })
    loading.dismiss();
  }

  salvar(){
    let carregar = this.loadController.create({content:'Aguarde...'});
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    let data = new Date();
    this.dados = {matricula:usuario[0].matricula, data:data, idEspecialidade:this.id, idMotivo:this.motivo, plataforma:'mobile'};
    carregar.present(carregar);
    this.apiPrefeitura.solicitarPreAgendamento(this.dados);
      let alert = this.alertCtrl.create({
        title: 'Tudo ok!',
        message: 'Pré consulta cadastrada com sucesso.',
        buttons: [{
          text:'Voltar',
          handler:() =>{
            this.navCtrl.setRoot(HomePage);
          }
        }]
      });
      alert.present();
      carregar.dismiss();
  }

}
