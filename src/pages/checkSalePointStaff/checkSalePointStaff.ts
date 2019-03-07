import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderSalePointsProvider } from '../../providers/provider-sale-points/provider-sale-points';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Spherical, LatLng } from '@ionic-native/google-maps';

/**
 * Generated class for the CheckSalePointStaffPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkSalePointStaff',
  templateUrl: 'checkSalePointStaff.html',
})
export class CheckSalePointStaffPage {

  private salePoints: any;
  private date: Date;
  private test: boolean;
  private staff: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public provider:ProviderSalePointsProvider, public persistence:PersistenceProvider,
      public loadingCtrl: LoadingController, public alertCtrl: AlertController,
        private geolocation: Geolocation) 
  {
    this.staff = this.navParams.get("staff");
    this.test = true;
    this.date = new Date();
    this.getSalePoints();
  }

  getSalePoints(){
    this.persistence.readFileAsText("salePoints.json")
    .then(
      (data)=>{
        this.salePoints = JSON.parse(data);
      },
      (err)=>{
        console.log(err);
        //Only Browser--------------------
        this.provider.getSalePoints()
        .subscribe(
          (data)=>{
            this.salePoints = data;
            console.log(data);
          },
          (err)=>{
            console.log(err);
          }
        )
        //---------------------------
      }
    )
  }

  makeCheckIn(salePoint){
    let x = Math.random() * (100000 - 30) + 30;
    console.log(this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear()+" - "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds());
    let loading = this.getLoading("Geolocalizando...",5000);
    loading.present();
    this.geolocation.getCurrentPosition()
    .then(
      (resp) =>{
        console.log(resp);
        let posStaff = new LatLng(resp.coords.latitude, resp.coords.longitude);
        let posSalePoint = new LatLng(salePoint.lat, salePoint.lng);
        loading.dismiss();
        if(this.validateDistance(posStaff, posSalePoint, 100) == true){
          let date = this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear()+" - "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();
          salePoint.checkStaff.push({codigo:x,nombre:this.staff.nombre,id:this.staff.id,checkin:date,checkout:"",actividades:"",lat:salePoint.lat,lng:salePoint.lng,sede:salePoint.direccion});
          this.salePoints = this.salePoints.map((ite)=>{
            if(ite.codigo == salePoint.codigo){
              ite = salePoint;
            }
            return ite;
          })
          this.persistence.updateJSON(this.salePoints,"salePoints.json");
          let alert = this.getAlert("Geolocalización Exitosa","Check In realizado<br>"+date, "Aceptar");
          alert.present();
        }
        else{
          let alert = this.getAlert("Geolocalización Fallida","No se encuentra ubicado en el punto de venta", "Aceptar");
          alert.present();
        }
      }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    )
   
        
    
    this.getSalePoints();
  }

  makeCheckOut(salePoint){
    let input = this.getInputAlert("Check Out","Escriba las actividades realizadas","activities","Actividades Realizadas","Aceptar","textarea",salePoint);
    input.present();
    this.getSalePoints();
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckSalePointStaffPage');
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

  getInputAlert(msj, stl, nm, ph, but, ty, sp){
    let x = Math.random() * (100000 - 30) + 30;
    const input = this.alertCtrl.create({
      title: msj,
      subTitle: stl,
      buttons:[ 
        { 
          text:but,
          handler: (activities) => {
            let loading = this.getLoading("Geolocalizando",5000);
            loading.present();
            this.geolocation.getCurrentPosition().then(
              (resp)=>{
                let posStaff = new LatLng(resp.coords.latitude, resp.coords.longitude);
                let posSalePoint = new LatLng(sp.lat, sp.lng);
                loading.dismiss();
                if(this.validateDistance(posStaff, posSalePoint, 100) == true){
                  let date = this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear()+" - "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();
                  this.salePoints = this.salePoints.map((ite)=>{
                    if(ite.codigo == sp.codigo){
                      ite.checkStaff[ite.checkStaff.length-1].actividades=activities.activities;
                      ite.checkStaff[ite.checkStaff.length-1].checkout=date;
                    }
                    return ite;
                  })
                  this.persistence.updateJSON(this.salePoints,"salePoints.json");
                  let alert = this.getAlert("Geolocalización Exitosa","Check Out realizado<br>"+date, "Aceptar");
                  alert.present();
                }
                else{
                  let alert = this.getAlert("Geolocalización Fallida","No se encuentra ubicado en el punto de venta", "Aceptar");
                  alert.present();
                }
              }
            )
            .catch(
              (error)=> console.log(error)
            )
          }
        }
      ],
      inputs:[
        {
          name: nm,
          placeholder: ph,
          type: ty,
          handler: () => {
            let loading = this.getLoading("Geolocalizando",5000);
            loading.present()
          }
        }
      ]
    })
    return input;
  }

  validateDistance(latlng1, latlng2, maxDistance){
    let dist = Spherical.computeDistanceBetween(latlng1,latlng2);
    if(dist <= maxDistance)
      return true;
    else 
      return false;
  }

}
