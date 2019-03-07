import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { ShowCheckPage } from '../showCheck/showCheck';
/**
 * Generated class for the TrackingMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trackingMap',
  templateUrl: 'trackingMap.html',
})
export class TrackingMapPage {

  private map: GoogleMap;
  private salePoints: any;
  private data: any;
  private type: any;
  private markers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get("data");
    this.salePoints = this.navParams.get("salePoints");
    this.type = this.navParams.get("type");
    if(this.type == "staff"){
      for(var i = 0; i<this.salePoints.length; i++){
        let ite = this.salePoints[i];
        let temp:Array<any> = ite.checkStaff;
        temp = temp.filter((x)=>{
          x.lat = ite.lat;
          x.lng = ite.lng;
          x.sede = ite.direccion;
          return x.nombre == this.data.nombre;
        })
        this.markers.push(temp);
      }
    }
    else if(this.type == "activo"){
      for(var i = 0; i<this.salePoints.length; i++){
        let ite = this.salePoints[i];
        let temp:Array<any> = ite.checkActivo;
        temp = temp.filter((x)=>{
          x.lat = ite.lat;
          x.lng = ite.lng;
          x.sede = ite.direccion;
          return x.nombre == this.data.nombre;
        })
        this.markers.push(temp);
      }
    }
    console.log(this.markers);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingMapPage');
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
    
      console.log(this.markers.length);
      for(var i = 0; i<this.markers.length; i++){
        let iterator = this.markers[i][this.markers[i].length-1];
        this.map.addMarkerSync({
          title: iterator.actividades,
          snippet: "Check In: "+iterator.checkin+" - Check Out: "+iterator.checkout,
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: iterator.lat,
            lng: iterator.lng
          }
        });
      }
    }
    
    showAllCheck(){
      this.navCtrl.push(ShowCheckPage,{checks:this.markers});
    }

}
