import { Network } from '@ionic-native/network';
import { Login_2Page } from './../login-2/login-2';
import { apiPrefeitura } from './../../services/api-prefeitura';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private auth: FormGroup; //FormGroup para validar campos obrigatorios

  public usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public apiPrefeitura: apiPrefeitura, public alertCtrl: AlertController,
              public loadController: LoadingController, private Form:FormBuilder,
              public menuCTRL: MenuController, private network:Network) {
    //validação de dados            
    this.auth = this.Form.group({
      cartao: ['', Validators.compose([Validators.required])] 
    });
    //bloquear menu
    this.menuCTRL.enable(false);

    this.consultaUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authenticate(){
    let connection = this.network.type; //pegar tipo de conexão atual do aparelho

    if ((connection === 'none') || (connection === 'unknown') || (connection === 'ethernet')){
      //setando alert
      let alert = this.alertCtrl.create({
        title: 'Ocorreu um erro!',
        message: 'Conecte na internet para fazer o login.',
        buttons: ['Voltar']
      });
      alert.present(); //lançando alert

    } else {

      const loading = this.loadController.create({content:'Aguarde...'}); // new modal 'carregando'
      loading.present(loading); // lançando modal
      
      let cartao = this.auth.value.cartao;

      this.apiPrefeitura.auth(cartao).subscribe(res => {
        loading.dismiss(); // eliminando modal

        let name = res.data[0].nome.split(' '); // cortando nome
        res.data[0].nome = name[0] + ' ' + name[name.length - 1]; //juntando nome e sobrenome
        res.data[0].flag = false; // setando flag para validar 2 fase login

        localStorage.setItem('usuario',JSON.stringify(res.data)); //salvando dados usuario
        this.navCtrl.push(Login_2Page); // lançando 2 fase login
      }, err => {
        loading.dismiss();
        // 'bad request' nenhum dado encontrado
        if (err.status === 404) {
          let alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            message: 'Não encontramos seus dados.',
            buttons: ['Voltar']
          });
          alert.present();
        } else {
          let alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            message: 'Ocorreu algum problema. Tente mais tarde.',
            buttons: ['Voltar']
          });
          alert.present();
        }
      });
    }
  }

  consultaUser(){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    if(this.usuario != null ){
      localStorage.clear();
    }
  }

}
