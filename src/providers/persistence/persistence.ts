import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';

/*
  Generated class for the PersistenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersistenceProvider {

  constructor(public http: HttpClient, public file: File) {
    console.log('Hello PersistenceProvider Provider');
  }


  updateJSON(data, nameFile){
    this.file.createFile(this.file.externalDataDirectory, nameFile, true)
    .then(
      (data)=>{
        console.log("Creacion File exitosa")
        console.log(data);
      },
      (err)=>{
        console.log("Creacion File Error")
        console.log(err);
      }
    )
    this.file.writeExistingFile(this.file.externalDataDirectory, nameFile, data)
    .then(
      (data)=>{
        console.log("Sobreescritura File exitosa")
        console.log(data);
      },
      (err)=>{
        console.log("Sobreescritura File Error")
        console.log(err);
      }
    )
  }


  readFileAsText(nameFile){
    return this.file.readAsText(this.file.externalDataDirectory,nameFile);
  }


}
