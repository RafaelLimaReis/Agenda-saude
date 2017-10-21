import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesAgendadaPage } from './detalhes-agendada';

@NgModule({
  declarations: [
    DetalhesAgendadaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesAgendadaPage),
  ],
})
export class DetalhesAgendadaPageModule {}
