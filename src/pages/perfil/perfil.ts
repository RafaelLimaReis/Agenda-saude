import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaPage } from '../consultas/consulta';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

	public usuario = JSON.parse(localStorage.getItem('usuario'));
	public fones:string = '';

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PerfilPage');
		this.usuario[0].sexo = this.usuario[0].sexo == 2 ? 'Feminio' : 'Masculino';
		this.fones = this.usuario[0].telefone == true ? this.usuario[0].telefone+' / '+this.usuario[0].celular : this.usuario[0].celular;
		this.usuario[0].doador = this.usuario[0].doador == 0 ? 'Não' : 'Sim';
		this.usuario[0].tipo_sangue = this.usuario[0].tipo_sangue == null ? 'Não cadastrado' : this.usuario[0].tipo_sangue;
		this.usuario[0].email = this.usuario[0].email == null ? 'Não cadastrado' : this.usuario[0].email;
	}

	voltar(){
		this.navCtrl.setRoot(ConsultaPage);
	}

}
