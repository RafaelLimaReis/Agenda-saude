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
  private auth: FormGroup;

  public usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public apiPrefeitura: apiPrefeitura, public alertCtrl: AlertController,
              public loadController: LoadingController, private Form:FormBuilder,
              public menuCTRL: MenuController) {
    this.auth = this.Form.group({
      cartao: ['', Validators.compose([Validators.required])] 
    });

    this.menuCTRL.enable(false);

    this.consultaUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authenticate(){
    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
    
    let cartao = this.auth.value.cartao;
    this.apiPrefeitura.auth(cartao).subscribe(res => {
      loading.dismiss();

      let name = res.data[0].nome.split(' ');
      res.data[0].nome = name[0] + ' ' + name[name.length - 2];
      res.data[0].flag = false;
      localStorage.setItem('usuario',JSON.stringify(res.data));
      this.navCtrl.push(Login_2Page);
    }, err => {
      loading.dismiss();
      if (err.status === 408) {
        let alert = this.alertCtrl.create({
          title: 'Ocorreu um erro!',
          message: 'Ocorreu algum problema. Tente mais tarde.',
          buttons: ['Voltar']
        });
        alert.present();
      } else if (err.status === 404) {
        let alert = this.alertCtrl.create({
          title: 'Ocorreu um erro!',
          message: 'Não encontramos seus dados.',
          buttons: ['Voltar']
        });
        alert.present();
      }
    });
  }

  consultaUser(){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    if(this.usuario != null ){
      localStorage.clear();
    }
  }

}
