import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderClientsProvider } from '../../providers/provider-clients/provider-clients';
import { CheckSalePointStaffPage } from '../checkSalePointStaff/checkSalePointStaff';
/**
 * Generated class for the CheckStaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkStaff',
  templateUrl: 'checkStaff.html',
})
export class CheckStaffPage {

  private staffs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public providerClients:ProviderClientsProvider) 
  {
    this.getStaffs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckStaffPage');
  }

  getStaffs(){
    this.providerClients.getStaff()
    .subscribe(
      (data)=>{
        this.staffs = data;
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  makeCheck(staff){
    this.navCtrl.push(CheckSalePointStaffPage,{staff:staff});
  }

}
