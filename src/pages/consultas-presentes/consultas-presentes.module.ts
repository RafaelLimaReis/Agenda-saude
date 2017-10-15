import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultasPresentesPage } from './consultas-presentes';

@NgModule({
  declarations: [
    ConsultasPresentesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultasPresentesPage),
  ],
})
export class ConsultasPresentesPageModule {}
