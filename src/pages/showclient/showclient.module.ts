import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowclientPage } from './showclient';

@NgModule({
  declarations: [
    ShowclientPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowclientPage),
  ],
})
export class ShowclientPageModule {}
