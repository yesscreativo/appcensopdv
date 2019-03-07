import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderClientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderClientsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProviderClientsProvider Provider');
  }

  getClients(){
    return this.http.get('assets/data/clients.json');
  }

  getStaff(){
    return this.http.get('assets/data/staff.json');
  }

  getActivos(){
    return this.http.get('assets/data/activos.json');
  }

}
