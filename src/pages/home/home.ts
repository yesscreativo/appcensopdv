import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ProviderClientsProvider } from '../../providers/provider-clients/provider-clients';
import { ProviderSalePointsProvider } from '../../providers/provider-sale-points/provider-sale-points';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public providerClients: ProviderClientsProvider,
    public events: Events, private file: File, public providerSPoints: ProviderSalePointsProvider) 
  {

    this.providerClients.getClients()
    .subscribe(
      (data) => {
        this.file.checkFile(this.file.externalDataDirectory, "Clients.json")
        .then(
          (data)=>{
            if(data == false){
              this.createFileJSONClients(data);
              console.log(data);
            }
          },
          (err)=>{
            this.createFileJSONClients(data);
            console.log(err);
          }
        )
      },
      (err) => {
        console.log(err);
      }      
    )
    this.providerSPoints.getSalePoints()
    .subscribe(
      (data) => {
        this.file.checkFile(this.file.externalDataDirectory, "salePoints.json")
        .then(
          (data)=>{
            if(data == false){
              this.createFileJSONSalePoints(data);
              console.log(data);
            }
          },
          (err)=>{
            this.createFileJSONSalePoints(data);
            console.log(err);
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
  }

  createFileJSONClients(data){
    this.file.createFile(this.file.externalDataDirectory, "Clients.json", true)
    .then(
      (data)=>{
        console.log("Creación File exitosa Clients")
        console.log(data);
      },
      (err)=>{
        console.log("Creación File Error Clients")
        console.log(err);
      }
    )

    this.file.writeExistingFile(this.file.externalDataDirectory, "Clients.json", data)
    .then(
        (data)=>{
          console.log("Sobreescritura File exitosa Clients.json")
          console.log(data);
        },
        (err)=>{
          console.log("Sobreescritura File Error Clients.json")
          console.log(err);
        }
    )
  }

  createFileJSONSalePoints(data){
    this.file.createFile(this.file.externalDataDirectory, "salePoints.json", true)
    .then(
      (data)=>{
        console.log("Creación File exitosa salePoints.json")
        console.log(data);
      },
      (err)=>{
        console.log("Creación File Error salePoints.json")
        console.log(err);
      }
    )

    this.file.writeExistingFile(this.file.externalDataDirectory, "salePoints.json", data)
    .then(
      (data)=>{
        console.log("Sobreescritura File exitosa salePoints.json")
        console.log(data);
      },
      (err)=>{
        console.log("Sobreescritura File Error salePoints.json")
        console.log(err);
      }
    )
  }
}
