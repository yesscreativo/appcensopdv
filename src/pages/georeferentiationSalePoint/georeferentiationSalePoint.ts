import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';

/**
 * Generated class for the GeoreferentiationSalePointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-georeferentiationSalePoint',
  templateUrl: 'georeferentiationSalePoint.html',
})
export class GeoreferentiationSalePointPage {

  private map: GoogleMap;
  private salePoint:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.salePoint = this.navParams.get("salePoint");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoreferentiationSalePointPage');
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
    let marker1: Marker = this.map.addMarkerSync({
      title: this.salePoint.cliente,
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.salePoint.lat,
        lng: this.salePoint.lng
      }
    });
  }

}
