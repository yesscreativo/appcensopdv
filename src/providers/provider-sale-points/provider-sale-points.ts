import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProviderSalePointsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderSalePointsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProviderSalePointsProvider Provider');
  }

  getSalePoints(){
    return this.http.get('assets/data/salePoints.json');
  }
}
