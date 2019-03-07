import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListclientsPage } from '../pages/listclients/listclients';
import { ShowclientPage } from '../pages/showclient/showclient';
import { CreateClientPage } from '../pages/createClient/createClient';
import { CreateSalePointView_1Page } from '../pages/createSalePointView1/createSalePointView1';
import { EncuestaClientePage } from '../pages/encuestaCliente/encuestaCliente';
import { EditClientPage } from '../pages/editClient/editClient';
import { GeoreferentiationSalePointPage } from '../pages/georeferentiationSalePoint/georeferentiationSalePoint';
import { CreateSalePointView3Page } from '../pages/createSalePointView3/createSalePointView3';
import { TrackingMapPage } from '../pages/trackingMap/trackingMap';
import { CheckActivoPage } from '../pages/checkActivo/checkActivo';
import { CheckStaffPage } from '../pages/checkStaff/checkStaff';
import { CheckSalePointStaffPage } from '../pages/checkSalePointStaff/checkSalePointStaff';
import { CheckSalePointActivoPage } from '../pages/checkSalePointActivo/checkSalePointActivo';
import { ShowCheckPage } from '../pages/showCheck/showCheck';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProviderClientsProvider } from '../providers/provider-clients/provider-clients';
import { ProviderSalePointsProvider } from '../providers/provider-sale-points/provider-sale-points';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { File } from '@ionic-native/file';
import { PersistenceProvider } from '../providers/persistence/persistence';
import { Geolocation } from '@ionic-native/geolocation';
import { Spherical } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListclientsPage,
    ShowclientPage,
    CreateClientPage,
    CreateSalePointView_1Page,
    EncuestaClientePage,
    EditClientPage,
    GeoreferentiationSalePointPage,
    CreateSalePointView3Page,
    TrackingMapPage,
    CheckStaffPage,
    CheckActivoPage,
    CheckSalePointStaffPage,
    CheckSalePointActivoPage,
    ShowCheckPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListclientsPage,
    ShowclientPage,
    CreateClientPage,
    CreateSalePointView_1Page,
    EncuestaClientePage,
    EditClientPage,
    GeoreferentiationSalePointPage,
    CreateSalePointView3Page,
    TrackingMapPage,
    CheckStaffPage,
    CheckActivoPage,
    CheckSalePointStaffPage,
    CheckSalePointActivoPage,
    ShowCheckPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProviderClientsProvider,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    ProviderSalePointsProvider,
    PersistenceProvider,
    Geolocation,
    Spherical
  ]
})
export class AppModule {}
