import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ProviderSalePointsProvider } from '../../providers/provider-sale-points/provider-sale-points';
import { GeoreferentiationSalePointPage } from '../georeferentiationSalePoint/georeferentiationSalePoint';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment } from '@ionic-native/google-maps';
import { PersistenceProvider } from '../../providers/persistence/persistence';
import { ProviderClientsProvider } from '../../providers/provider-clients/provider-clients';
import { TrackingMapPage } from '../trackingMap/trackingMap';

@IonicPage()
@Component({
  selector: 'page-showclient',
  templateUrl: 'showclient.html',
})
export class ShowclientPage {

  private map: GoogleMap;
  private client:any;
  private salePoints:any;
  private views:any;
  private staffs:any;
  private activos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private platform:Platform, public provider:ProviderSalePointsProvider,
      public persistence:PersistenceProvider, public providerClients:ProviderClientsProvider)              
  {
    this.views = "info";
    this.getSalePoints();    
    this.getStaffs();    
    this.getActivos();
    this.client = navParams.get('client');
    console.log(this.client);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowclientPage');
  }

  showTracking(data, type){
    console.log(data);
    this.navCtrl.push(TrackingMapPage,{data:data, salePoints:this.salePoints, type:type});
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

  getSalePoints(){
    this.persistence.readFileAsText("salePoints.json")
    .then(
      (data)=>{
        this.salePoints = JSON.parse(data);
        this.salePoints = this.salePoints.filter((salePoint) => {
          return (salePoint.nit == this.client.nit)
        })
      },
      (err)=>{
        console.log(err);
        //Only Browser--------------------
        this.provider.getSalePoints()
        .subscribe(
          (data)=>{
            this.salePoints = data;
            this.salePoints = this.salePoints.filter((salePoint) => {
              return (salePoint.nit == this.client.nit)
            })
            console.log(data);
            console.log(this.salePoints);
          },
          (err)=>{
            console.log(err);
          }
        )
        //---------------------------
      }
    )
  }
  
  showGeoMap(salePoint){
    this.navCtrl.push(GeoreferentiationSalePointPage,{salePoint:salePoint});
  }
  
}
