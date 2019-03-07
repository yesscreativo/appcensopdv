import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaClientePage } from './encuestaCliente';

@NgModule({
  declarations: [
    EncuestaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaClientePage),
  ],
})
export class EncuestaClientePageModule {}
