import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EncuestaClientePage } from '../encuestaCliente/encuestaCliente';
import { PersistenceProvider } from '../../providers/persistence/persistence';

@IonicPage()
@Component({
  selector: 'page-createClient',
  templateUrl: 'createClient.html',
})
export class CreateClientPage {

  private todo: FormGroup;
  private img = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public loadingCtrl: LoadingController,
      public alertCtrl: AlertController, public platform: Platform,
        public persistence:PersistenceProvider) 
  {
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
    console.log('ionViewDidLoad CreateClientPage');
  }

  logForm() {
    console.log(this.todo)
    let loading = this.getLoading("Cargando", 30000);
    loading.present();
    // this.persistence.readFileAsText("Clients.json")
    // .then(
    //   (data)=>{
    //     let clients = JSON.parse(data);
    //     clients.push(this.todo.value);
    //     this.persistence.updateJSON(clients,"Clients.json");
    //     loading.dismiss();
    //     let alert = this.getAlert("Creacion Cliente","Exito","Aceptar");
    //     alert.present();      
    //   },
    //   (err)=>{
    //     console.log(err);
    //     loading.dismiss();
    //     let alert = this.getAlert("Creacion Cliente","Falló","Aceptar");
    //     alert.present(); 
    //   }
    // )
    
   // this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(EncuestaClientePage);
    loading.dismiss();
  }

  getLoading(msj, p_duration) {
    const loader = this.loadingCtrl.create({
      content: msj,
      duration: p_duration
    });
    return loader;
  }

  getAlert(msj, stl, but) {
    const alert = this.alertCtrl.create({
      title: msj,
      subTitle: stl,
      buttons: [but]
    });
    return alert;
  }

}
