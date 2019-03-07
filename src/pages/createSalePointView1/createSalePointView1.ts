import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CreateSalePointView3Page } from '../createSalePointView3/createSalePointView3';
import { LoadingController } from 'ionic-angular';
import { PersistenceProvider } from '../../providers/persistence/persistence';
//Only browser
import { ProviderClientsProvider } from '../../providers/provider-clients/provider-clients'
/**
 * Generated class for the CreateSalePointView_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createSalePointView1',
  templateUrl: 'createSalePointView1.html',
})
export class CreateSalePointView_1Page {

  private form : FormGroup;
  private clients: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public loadingCtrl: LoadingController,
      public persistence:PersistenceProvider, public providerClients: ProviderClientsProvider) 
  {
    this.form = this.formBuilder.group({
      cliente: ['', Validators.required],
      contacto: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      productos_servicios: ['', Validators.required],
    });
    this.getClients();
  }

  getClients(){
    this.persistence.readFileAsText("Clients.json")
    .then(
      (data)=>{
        this.clients = JSON.parse(data);
      },
      (err)=>{
        console.log(err);
        //Only browser ---------------
        this.providerClients.getClients()
        .subscribe(
          (data)=>{
            this.clients = data;
          },
          (err)=>{
            console.log(err);
          }
        )
        //----------------------------
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSalePointView_1Page');
  }

  nextView(form) {
    console.log(form);
    let loader = this.getLoading('Cargando...',500);
    loader.present();
    this.navCtrl.push(CreateSalePointView3Page, {formView1: this.form});
    console.log("Entro!");
  }

  getLoading(msj,p_duration) {
    const loader = this.loadingCtrl.create({
      content: msj,
      duration: p_duration
    });
    return loader;
  }
}
