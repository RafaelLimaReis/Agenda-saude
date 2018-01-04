import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesConsultaPage } from './detalhes-consulta';

@NgModule({
  declarations: [
    DetalhesConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesConsultaPage),
  ],
})
export class DetalhesConsultaPageModule {}
