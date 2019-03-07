import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment, MarkerCluster } from '@ionic-native/google-maps';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CreateSalePointView3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createSalePointView3',
  templateUrl: 'createSalePointView3.html',
})
export class CreateSalePointView3Page {

  private markers: boolean = false;
  private formView1: FormGroup;
  private map: GoogleMap;
  private dataForm: any;
  private marker: Marker;
  private localization: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public loadingCtrl: LoadingController, public alertCtrl: AlertController, 
        public persistence:PersistenceProvider, private formBuilder: FormBuilder)  
  {
    this.formView1 = this.navParams.get('formView1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSalePointView3Page');
    this.initMap();
  }

  initMap(){
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 4.6324935,
           lng: -74.074753
         },
         zoom: 15,
         tilt: 30
       }
    };
    this.map = GoogleMaps.create('map',mapOptions);
    this.map.on(GoogleMapsEvent.MAP_CLICK)
    .subscribe(
      (data)=>{
        console.log(data);
        if(this.markers == false){
          this.marker= this.map.addMarkerSync({
            title: 'holaa',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: data[0].lat,
              lng: data[0].lng
            }
          });
          this.localization = data;
          this.markers = true;
        }
      }
    )
  }

  getAlert(msj, stl, but) {
    const alert = this.alertCtrl.create({
      title: msj,
      subTitle: stl,
      buttons: [but]
    });
    return alert;
  }

  getLoading(msj, p_duration) {
    const loader = this.loadingCtrl.create({
      content: msj,
      duration: p_duration
    });
    return loader;
  }

  saveSalePoint(){
    console.log(this.formView1.value);
    console.log(this.localization);
    if(this.markers){
      let x = Math.random() * (100000 - 30) + 30;
      let value1 = this.formView1.value;
      let value3 = this.localization[0];
      let json = {  'cliente':value1.cliente,'codigo':x,'nit':value1.cliente, 'contacto':value1.contacto, 'correo':value1.correo,
                    'direccion':value1.direccion, 'pro_pres':value1.productos_servicios,
                    'telefono' :value1.telefono,
                    'lat':value3.lat, 'lng':value3.lng, 'checkStaff':[], 'checkActivo':[]};
      let loading = this.getLoading("Cargando", 300);
      loading.present();
      this.persistence.readFileAsText("salePoints.json")
      .then(
        (data)=>{
          console.log(data);
          let clients = JSON.parse(data);
          clients.push(json);
          this.persistence.updateJSON(clients,"salePoints.json");
          console.log("Debug # 001");
          loading.dismiss();
          let alert = this.getAlert("Creacion Punto de venta","Exito","Aceptar");
          alert.present();  
        },
        (err)=>{
          console.log(err);
          loading.dismiss();
          let alert = this.getAlert("Creacion Punto de venta","Falló","Aceptar");
          alert.present();  
        }
      )
      this.navCtrl.setRoot(HomePage);
    }
    
  }

}
