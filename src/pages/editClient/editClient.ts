import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the EditClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editClient',
  templateUrl: 'editClient.html',
})
export class EditClientPage {

  private todo: FormGroup;
  private client: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      private formBuilder: FormBuilder) 
  {
    this.client = this.navParams.get('client');
    this.todo = this.formBuilder.group({
      razon: ['', Validators.required],
      rut: ['', Validators.required],
      nit: ['', Validators.required],
      rep_legal: ['', Validators.required],
      ciudad: ['', Validators.required],
      barrio: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      can_ven: ['', Validators.required],
      sub_can_ven: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditClientPage');
  }

}
