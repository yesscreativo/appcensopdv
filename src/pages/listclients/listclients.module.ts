import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListclientsPage } from './listclients';

@NgModule({
  declarations: [
    ListclientsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListclientsPage),
  ],
})
export class ListclientsPageModule {}
