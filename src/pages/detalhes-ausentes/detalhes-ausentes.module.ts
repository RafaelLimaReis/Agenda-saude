import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesAusentesPage } from './detalhes-ausentes';

@NgModule({
  declarations: [
    DetalhesAusentesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesAusentesPage),
  ],
})
export class DetalhesAusentesPageModule {}
