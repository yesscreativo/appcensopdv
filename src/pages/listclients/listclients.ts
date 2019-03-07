import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowclientPage } from '../showclient/showclient';
import { EditClientPage } from '../editClient/editClient';
import { PersistenceProvider } from '../../providers/persistence/persistence';

//Only browser
import { ProviderClientsProvider } from '../../providers/provider-clients/provider-clients'

/**
 * Generated class for the ListclientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listclients',
  templateUrl: 'listclients.html',
})
export class ListclientsPage {

  clients:any;
  clientsAll:any;
  web:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public providerClients: ProviderClientsProvider, public persistence:PersistenceProvider) 
  {
    //Call providerClients and get Clients 
    this.getClients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListclientsPage');
  }

  getClients(){
    console.log("Consumir evento");
    this.persistence.readFileAsText("Clients.json")
    .then(
      (data)=>{
        console.log(data);
        this.clients = JSON.parse(data);
        this.clientsAll = JSON.parse(data);
      },
      (err)=>{
        console.log(err);
        //Only browser ---------------
        this.providerClients.getClients()
        .subscribe(
          (data)=>{
            this.clients = data;
            this.clientsAll = data;
          },
          (err)=>{
            console.log(err);
          }
        )
        //----------------------------
      }
    )
  }

  showClient(client){
    console.log(client);
    this.navCtrl.push(ShowclientPage,{client:client});
  }

  editClient(client){
    console.log(client);
    this.navCtrl.push(EditClientPage,{client:client});
  }

  getItems(ev: any) {
  this.clients = this.clientsAll;
  const val = ev.target.value;
  if (val && val.trim() != '') {
    this.clients = this.clients.filter((client) => {
      return (client.nit.indexOf(val)) > -1;
    })
  }
   console.log("evento");
  }
}
