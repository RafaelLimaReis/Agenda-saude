import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the HelpDescriptionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'help-description',
  templateUrl: 'help-description.html'
})
export class HelpDescriptionComponent {

  private helpDescription: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.helpDescription = this.navParams.get('help');
  }

  voltarAgendadas(){
    this.viewCtrl.dismiss();
  }
}
