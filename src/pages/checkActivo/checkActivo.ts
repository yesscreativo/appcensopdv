import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderClientsProvider } from '../../providers/provider-clients/provider-clients';
import { CheckSalePointActivoPage } from '../checkSalePointActivo/checkSalePointActivo';
/**
 * Generated class for the CheckActivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkActivo',
  templateUrl: 'checkActivo.html',
})
export class CheckActivoPage {

  private activos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public providerClients:ProviderClientsProvider) {
      this.getActivos();
  }

  getActivos(){
    this.providerClients.getActivos()
    .subscribe(
      (data)=>{
        this.activos = data;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckActivoPage');
  }

  makeCheck(activo){
    this.navCtrl.push(CheckSalePointActivoPage,{activo:activo});
  }

}
