import { HomePage } from './../home/home';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';

/**
 * Generated class for the Login_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-2',
  templateUrl: 'login-2.html',
})
export class Login_2Page {

  public usuario: any = {};
  public name: string = '';
  private validateDate: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadController: LoadingController, private Form:FormBuilder,
              public menuCTRL: MenuController) {
    this.validateDate = this.Form.group({
      dtNascimento: ['', Validators.compose([Validators.required])] 
    });
  }

  ionViewDidLoad() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.name = this.usuario[0].nome;
    console.log(this.usuario);
  }

  validate(){
    const loading = this.loadController.create({content:'Aguarde...'});
    loading.present(loading);
    const dtNascimento = this.usuario[0].dt_nasc.split('T');
    if(this.validateDate.value.dtNascimento == dtNascimento[0]){
      this.usuario[0].flag = true;
      localStorage.setItem('usuario',JSON.stringify(this.usuario));
      this.menuCTRL.enable(true);
      this.navCtrl.setRoot(HomePage);
      loading.dismiss();
    } else {
      loading.dismiss();

      let alert = this.alertCtrl.create({
        title: 'Ocorreu um erro!',
        message: 'Data de nascimento incorreta.',
        buttons: ['Voltar']
      });
      alert.present();
    }
  }

}
