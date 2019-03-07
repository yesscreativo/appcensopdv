import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showCheck',
  templateUrl: 'showCheck.html',
})
export class ShowCheckPage {

  private checks: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checks = this.navParams.get("checks");
    console.log(this.checks);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowCheckPage');
  }

}
