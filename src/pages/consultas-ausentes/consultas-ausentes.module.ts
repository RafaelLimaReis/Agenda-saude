import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultasAusentesPage } from './consultas-ausentes';

@NgModule({
  declarations: [
    ConsultasAusentesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultasAusentesPage),
  ],
})
export class ConsultasAusentesPageModule {}
