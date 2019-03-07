webpackJsonp([14],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckActivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_clients_provider_clients__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkSalePointActivo_checkSalePointActivo__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CheckActivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckActivoPage = (function () {
    function CheckActivoPage(navCtrl, navParams, providerClients) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providerClients = providerClients;
        this.getActivos();
    }
    CheckActivoPage.prototype.getActivos = function () {
        var _this = this;
        this.providerClients.getActivos()
            .subscribe(function (data) {
            _this.activos = data;
        }, function (err) {
            console.log(err);
        });
    };
    CheckActivoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckActivoPage');
    };
    CheckActivoPage.prototype.makeCheck = function (activo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkSalePointActivo_checkSalePointActivo__["a" /* CheckSalePointActivoPage */], { activo: activo });
    };
    CheckActivoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkActivo',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkActivo/checkActivo.html"*/`<!--\n  Generated template for the CheckActivoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Checking Activos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-item *ngFor="let activo of activos" (click)="makeCheck(activo)">\n        <ion-icon name="{{activo.logo}}" item-start></ion-icon>\n        <h2>{{activo.nombre}}</h2>\n        <p>{{activo.placa}}</p>\n      </button>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkActivo/checkActivo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */]])
    ], CheckActivoPage);
    return CheckActivoPage;
}());

//# sourceMappingURL=checkActivo.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckSalePointActivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_sale_points_provider_sale_points__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CheckSalePointActivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckSalePointActivoPage = (function () {
    function CheckSalePointActivoPage(navCtrl, navParams, provider, persistence, loadingCtrl, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.persistence = persistence;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.activo = this.navParams.get("activo");
        this.test = true;
        this.date = new Date();
        this.getSalePoints();
    }
    CheckSalePointActivoPage.prototype.getSalePoints = function () {
        var _this = this;
        this.persistence.readFileAsText("salePoints.json")
            .then(function (data) {
            _this.salePoints = JSON.parse(data);
        }, function (err) {
            console.log(err);
            //Only Browser--------------------
            _this.provider.getSalePoints()
                .subscribe(function (data) {
                _this.salePoints = data;
                console.log(data);
            }, function (err) {
                console.log(err);
            });
            //---------------------------
        });
    };
    CheckSalePointActivoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckSalePointActivoPage');
    };
    CheckSalePointActivoPage.prototype.makeCheckIn = function (salePoint) {
        var _this = this;
        var x = Math.random() * (100000 - 30) + 30;
        var loading = this.getLoading("Geolocalizando...", 5000);
        loading.present();
        this.geolocation.getCurrentPosition().then(function (resp) {
            var posStaff = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
            var posSalePoint = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](salePoint.lat, salePoint.lng);
            loading.dismiss();
            if (_this.validateDistance(posStaff, posSalePoint, 100) == true) {
                var date = _this.date.getDate() + "/" + _this.date.getMonth() + "/" + _this.date.getFullYear() + " - " + _this.date.getHours() + ":" + _this.date.getMinutes() + ":" + _this.date.getSeconds();
                salePoint.checkActivo.push({ codigo: x, nombre: _this.activo.nombre, id: _this.activo.id, checkin: date, checkout: "", actividades: "asdsa", lat: salePoint.lat, lng: salePoint.lng, sede: salePoint.direccion });
                _this.salePoints = _this.salePoints.map(function (ite) {
                    if (ite.codigo == salePoint.codigo) {
                        ite = salePoint;
                    }
                    return ite;
                });
                _this.persistence.updateJSON(_this.salePoints, "salePoints.json");
                var alert_1 = _this.getAlert("Geolocalización Exitosa", "Check In realizado<br>" + date, "Aceptar");
                alert_1.present();
            }
            else {
                var alert_2 = _this.getAlert("Geolocalización Fallida", "No se encuentra ubicado en el punto de venta", "Aceptar");
                alert_2.present();
            }
        });
    };
    CheckSalePointActivoPage.prototype.makeCheckOut = function (salePoint) {
        var input = this.getInputAlert("Check Out", "Escriba las actividades realizadas", "activities", "Actividades Realizadas", "Aceptar", "textarea", salePoint);
        input.present();
    };
    CheckSalePointActivoPage.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    CheckSalePointActivoPage.prototype.getLoading = function (msj, p_duration) {
        var loader = this.loadingCtrl.create({
            content: msj,
            duration: p_duration
        });
        return loader;
    };
    CheckSalePointActivoPage.prototype.getAlert = function (msj, stl, but) {
        var alert = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [but]
        });
        return alert;
    };
    CheckSalePointActivoPage.prototype.getInputAlert = function (msj, stl, nm, ph, but, ty, sp) {
        var _this = this;
        var x = Math.random() * (100000 - 30) + 30;
        var input = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [
                {
                    text: but,
                    handler: function (activities) {
                        var loading = _this.getLoading("Geolocalizando", 5000);
                        loading.present();
                        _this.geolocation.getCurrentPosition().then(function (resp) {
                            var posStaff = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
                            var posSalePoint = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](sp.lat, sp.lng);
                            loading.dismiss();
                            if (_this.validateDistance(posStaff, posSalePoint, 100) == true) {
                                var date_1 = _this.date.getDate() + "/" + _this.date.getMonth() + "/" + _this.date.getFullYear() + " - " + _this.date.getHours() + ":" + _this.date.getMinutes() + ":" + _this.date.getSeconds();
                                _this.salePoints = _this.salePoints.map(function (ite) {
                                    if (ite.codigo == sp.codigo) {
                                        ite.checkActivo[ite.checkActivo.length - 1].actividades = activities.activities;
                                        ite.checkActivo[ite.checkActivo.length - 1].checkout = date_1;
                                    }
                                    return ite;
                                });
                                _this.persistence.updateJSON(_this.salePoints, "salePoints.json");
                                var alert_3 = _this.getAlert("Geolocalización Exitosa", "Check Out realizado<br>" + date_1, "Aceptar");
                                alert_3.present();
                            }
                            else {
                                var alert_4 = _this.getAlert("Geolocalización Fallida", "No se encuentra ubicado en el punto de venta", "Aceptar");
                                alert_4.present();
                            }
                        });
                    }
                }
            ],
            inputs: [
                {
                    name: nm,
                    placeholder: ph,
                    type: ty,
                    handler: function () {
                        var loading = _this.getLoading("Geolocalizando", 5000);
                        loading.present();
                    }
                }
            ]
        });
        return input;
    };
    CheckSalePointActivoPage.prototype.validateDistance = function (latlng1, latlng2, maxDistance) {
        var dist = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* Spherical */].computeDistanceBetween(latlng1, latlng2);
        if (dist <= maxDistance)
            return true;
        else
            return false;
    };
    CheckSalePointActivoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkSalePointActivo',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkSalePointActivo/checkSalePointActivo.html"*/`<!--\n  Generated template for the CheckSalePointActivoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>checkSalePointActivo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let salePoint of salePoints">\n      <ion-icon name="md-pricetag" color="primary" item-start></ion-icon>\n       <h2>{{salePoint.cliente}}</h2>\n       <h3>{{salePoint.direccion}}</h3>\n       <p>{{salePoint.contacto}}</p>\n       <button ion-button color="primary" outline item-end (click)="makeCheckIn(salePoint)">Check In</button>\n       <button ion-button color="primary" outline item-end (click)="makeCheckOut(salePoint)">Chech Out</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-label>Test Ubicación</ion-label>\n    <ion-toggle [(ngModel)]="test"></ion-toggle>\n  </ion-item>\n</ion-footer>`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkSalePointActivo/checkSalePointActivo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_provider_sale_points_provider_sale_points__["a" /* ProviderSalePointsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], CheckSalePointActivoPage);
    return CheckSalePointActivoPage;
}());

//# sourceMappingURL=checkSalePointActivo.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckSalePointStaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_sale_points_provider_sale_points__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CheckSalePointStaffPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckSalePointStaffPage = (function () {
    function CheckSalePointStaffPage(navCtrl, navParams, provider, persistence, loadingCtrl, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.persistence = persistence;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.staff = this.navParams.get("staff");
        this.test = true;
        this.date = new Date();
        this.getSalePoints();
    }
    CheckSalePointStaffPage.prototype.getSalePoints = function () {
        var _this = this;
        this.persistence.readFileAsText("salePoints.json")
            .then(function (data) {
            _this.salePoints = JSON.parse(data);
        }, function (err) {
            console.log(err);
            //Only Browser--------------------
            _this.provider.getSalePoints()
                .subscribe(function (data) {
                _this.salePoints = data;
                console.log(data);
            }, function (err) {
                console.log(err);
            });
            //---------------------------
        });
    };
    CheckSalePointStaffPage.prototype.makeCheckIn = function (salePoint) {
        var _this = this;
        var x = Math.random() * (100000 - 30) + 30;
        console.log(this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear() + " - " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds());
        var loading = this.getLoading("Geolocalizando...", 5000);
        loading.present();
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            console.log(resp);
            var posStaff = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
            var posSalePoint = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](salePoint.lat, salePoint.lng);
            loading.dismiss();
            if (_this.validateDistance(posStaff, posSalePoint, 100) == true) {
                var date = _this.date.getDate() + "/" + _this.date.getMonth() + "/" + _this.date.getFullYear() + " - " + _this.date.getHours() + ":" + _this.date.getMinutes() + ":" + _this.date.getSeconds();
                salePoint.checkStaff.push({ codigo: x, nombre: _this.staff.nombre, id: _this.staff.id, checkin: date, checkout: "", actividades: "", lat: salePoint.lat, lng: salePoint.lng, sede: salePoint.direccion });
                _this.salePoints = _this.salePoints.map(function (ite) {
                    if (ite.codigo == salePoint.codigo) {
                        ite = salePoint;
                    }
                    return ite;
                });
                _this.persistence.updateJSON(_this.salePoints, "salePoints.json");
                var alert_1 = _this.getAlert("Geolocalización Exitosa", "Check In realizado<br>" + date, "Aceptar");
                alert_1.present();
            }
            else {
                var alert_2 = _this.getAlert("Geolocalización Fallida", "No se encuentra ubicado en el punto de venta", "Aceptar");
                alert_2.present();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
        this.getSalePoints();
    };
    CheckSalePointStaffPage.prototype.makeCheckOut = function (salePoint) {
        var input = this.getInputAlert("Check Out", "Escriba las actividades realizadas", "activities", "Actividades Realizadas", "Aceptar", "textarea", salePoint);
        input.present();
        this.getSalePoints();
    };
    CheckSalePointStaffPage.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    CheckSalePointStaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckSalePointStaffPage');
    };
    CheckSalePointStaffPage.prototype.getLoading = function (msj, p_duration) {
        var loader = this.loadingCtrl.create({
            content: msj,
            duration: p_duration
        });
        return loader;
    };
    CheckSalePointStaffPage.prototype.getAlert = function (msj, stl, but) {
        var alert = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [but]
        });
        return alert;
    };
    CheckSalePointStaffPage.prototype.getInputAlert = function (msj, stl, nm, ph, but, ty, sp) {
        var _this = this;
        var x = Math.random() * (100000 - 30) + 30;
        var input = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [
                {
                    text: but,
                    handler: function (activities) {
                        var loading = _this.getLoading("Geolocalizando", 5000);
                        loading.present();
                        _this.geolocation.getCurrentPosition().then(function (resp) {
                            var posStaff = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](resp.coords.latitude, resp.coords.longitude);
                            var posSalePoint = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](sp.lat, sp.lng);
                            loading.dismiss();
                            if (_this.validateDistance(posStaff, posSalePoint, 100) == true) {
                                var date_1 = _this.date.getDate() + "/" + _this.date.getMonth() + "/" + _this.date.getFullYear() + " - " + _this.date.getHours() + ":" + _this.date.getMinutes() + ":" + _this.date.getSeconds();
                                _this.salePoints = _this.salePoints.map(function (ite) {
                                    if (ite.codigo == sp.codigo) {
                                        ite.checkStaff[ite.checkStaff.length - 1].actividades = activities.activities;
                                        ite.checkStaff[ite.checkStaff.length - 1].checkout = date_1;
                                    }
                                    return ite;
                                });
                                _this.persistence.updateJSON(_this.salePoints, "salePoints.json");
                                var alert_3 = _this.getAlert("Geolocalización Exitosa", "Check Out realizado<br>" + date_1, "Aceptar");
                                alert_3.present();
                            }
                            else {
                                var alert_4 = _this.getAlert("Geolocalización Fallida", "No se encuentra ubicado en el punto de venta", "Aceptar");
                                alert_4.present();
                            }
                        })
                            .catch(function (error) { return console.log(error); });
                    }
                }
            ],
            inputs: [
                {
                    name: nm,
                    placeholder: ph,
                    type: ty,
                    handler: function () {
                        var loading = _this.getLoading("Geolocalizando", 5000);
                        loading.present();
                    }
                }
            ]
        });
        return input;
    };
    CheckSalePointStaffPage.prototype.validateDistance = function (latlng1, latlng2, maxDistance) {
        var dist = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["d" /* Spherical */].computeDistanceBetween(latlng1, latlng2);
        if (dist <= maxDistance)
            return true;
        else
            return false;
    };
    CheckSalePointStaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkSalePointStaff',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkSalePointStaff/checkSalePointStaff.html"*/`<!--\n  Generated template for the CheckSalePointStaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Puntos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let salePoint of salePoints">\n      <ion-icon name="md-pricetag" color="primary" item-start></ion-icon>\n       <h2>{{salePoint.cliente}}</h2>\n       <h3>{{salePoint.direccion}}</h3>\n       <p>{{salePoint.contacto}}</p>\n       <button ion-button color="primary" outline item-end (click)="makeCheckIn(salePoint)">Check In</button>\n       <button ion-button color="primary" outline item-end (click)="makeCheckOut(salePoint)">Chech Out</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-label>Test Ubicación</ion-label>\n    <ion-toggle [(ngModel)]="test"></ion-toggle>\n  </ion-item>\n</ion-footer>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkSalePointStaff/checkSalePointStaff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_provider_sale_points_provider_sale_points__["a" /* ProviderSalePointsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], CheckSalePointStaffPage);
    return CheckSalePointStaffPage;
}());

//# sourceMappingURL=checkSalePointStaff.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckStaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_clients_provider_clients__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkSalePointStaff_checkSalePointStaff__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CheckStaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckStaffPage = (function () {
    function CheckStaffPage(navCtrl, navParams, providerClients) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providerClients = providerClients;
        this.getStaffs();
    }
    CheckStaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckStaffPage');
    };
    CheckStaffPage.prototype.getStaffs = function () {
        var _this = this;
        this.providerClients.getStaff()
            .subscribe(function (data) {
            _this.staffs = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    CheckStaffPage.prototype.makeCheck = function (staff) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkSalePointStaff_checkSalePointStaff__["a" /* CheckSalePointStaffPage */], { staff: staff });
    };
    CheckStaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkStaff',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkStaff/checkStaff.html"*/`<!--\n  Generated template for the CheckStaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Checking Personal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-item *ngFor="let staffVar of staffs" (click)="makeCheck(staffVar)">\n    <ion-icon name="md-person" item-start></ion-icon>\n      {{staffVar.nombre}}\n  </button>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/checkStaff/checkStaff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */]])
    ], CheckStaffPage);
    return CheckStaffPage;
}());

//# sourceMappingURL=checkStaff.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__encuestaCliente_encuestaCliente__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateClientPage = (function () {
    function CreateClientPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl, platform, persistence) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.persistence = persistence;
        this.img = {};
        this.todo = this.formBuilder.group({
            razon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rep_legal: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            can_ven: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            sub_can_ven: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    CreateClientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateClientPage');
    };
    CreateClientPage.prototype.logForm = function () {
        console.log(this.todo);
        var loading = this.getLoading("Cargando", 30000);
        loading.present();
        // this.persistence.readFileAsText("Clients.json")
        // .then(
        //   (data)=>{
        //     let clients = JSON.parse(data);
        //     clients.push(this.todo.value);
        //     this.persistence.updateJSON(clients,"Clients.json");
        //     loading.dismiss();
        //     let alert = this.getAlert("Creacion Cliente","Exito","Aceptar");
        //     alert.present();      
        //   },
        //   (err)=>{
        //     console.log(err);
        //     loading.dismiss();
        //     let alert = this.getAlert("Creacion Cliente","Falló","Aceptar");
        //     alert.present(); 
        //   }
        // )
        // this.navCtrl.setRoot(HomePage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__encuestaCliente_encuestaCliente__["a" /* EncuestaClientePage */]);
        loading.dismiss();
    };
    CreateClientPage.prototype.getLoading = function (msj, p_duration) {
        var loader = this.loadingCtrl.create({
            content: msj,
            duration: p_duration
        });
        return loader;
    };
    CreateClientPage.prototype.getAlert = function (msj, stl, but) {
        var alert = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [but]
        });
        return alert;
    };
    CreateClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createClient',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/createClient/createClient.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Creacion</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <form [formGroup]="todo" (ngSubmit)="logForm(form)">\n    <ion-card>\n      <p class="subtitle">Razon Social<p>\n      <ion-input type="text" formControlName="razon" placeholder="Razon social"></ion-input>\n    </ion-card>\n    <ion-card>\n        <p class="subtitle">Rut<p>\n        <ion-input type="text" formControlName="rut" placeholder="Rut"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Nit</p>\n      <ion-input type="text" formControlName="nit" placeholder="Nit"></ion-input>\n    </ion-card>\n    <ion-card>\n        <p class="subtitle">Representante Legal<p>\n        <ion-input type="text" formControlName="rep_legal" placeholder="Representante Legal"></ion-input>\n    </ion-card>\n    <ion-card>\n        <p class="subtitle">Ciudad<p>\n        <ion-input type="text" formControlName="ciudad" placeholder="Ciudad"></ion-input>\n      </ion-card>\n    <ion-card>\n      <p class="subtitle">Direccion Principal</p>\n      <ion-input type="text" formControlName="direccion" placeholder="Direccion"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Barrio<p>\n      <ion-input type="text" formControlName="barrio" placeholder="Barrio"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Telefono</p>\n      <ion-input type="text" formControlName="telefono" placeholder="Telefono"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Correo</p>\n      <ion-input type="text" formControlName="correo" placeholder="Correo"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Canal De Ventas</p>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-select formControlName="can_ven">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n    </ion-item>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Subcanal De Ventas</p>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-select formControlName="sub_can_ven">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n    <button ion-button color="secondary" type="submit" [disabled]="!todo.valid">Guardar</button>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/createClient/createClient.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */]) === "function" && _g || Object])
    ], CreateClientPage);
    return CreateClientPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=createClient.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSalePointView_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createSalePointView3_createSalePointView3__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_provider_clients_provider_clients__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//Only browser

/**
 * Generated class for the CreateSalePointView_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateSalePointView_1Page = (function () {
    function CreateSalePointView_1Page(navCtrl, navParams, formBuilder, loadingCtrl, persistence, providerClients) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.persistence = persistence;
        this.providerClients = providerClients;
        this.form = this.formBuilder.group({
            cliente: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contacto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            productos_servicios: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.getClients();
    }
    CreateSalePointView_1Page.prototype.getClients = function () {
        var _this = this;
        this.persistence.readFileAsText("Clients.json")
            .then(function (data) {
            _this.clients = JSON.parse(data);
        }, function (err) {
            console.log(err);
            //Only browser ---------------
            _this.providerClients.getClients()
                .subscribe(function (data) {
                _this.clients = data;
            }, function (err) {
                console.log(err);
            });
            //----------------------------
        });
    };
    CreateSalePointView_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateSalePointView_1Page');
    };
    CreateSalePointView_1Page.prototype.nextView = function (form) {
        console.log(form);
        var loader = this.getLoading('Cargando...', 500);
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createSalePointView3_createSalePointView3__["a" /* CreateSalePointView3Page */], { formView1: this.form });
        console.log("Entro!");
    };
    CreateSalePointView_1Page.prototype.getLoading = function (msj, p_duration) {
        var loader = this.loadingCtrl.create({
            content: msj,
            duration: p_duration
        });
        return loader;
    };
    CreateSalePointView_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createSalePointView1',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/createSalePointView1/createSalePointView1.html"*/`<!--\n  Generated template for the CreateSalePointView_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Creación - Punto de venta</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n      <ion-title>Paso 1<br>Información General Del PDV</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="nextView(form)">\n    <ion-card>\n      <p class="subtitle">Cliente</p>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-select formControlName="cliente">\n          <ion-option *ngFor="let client of clients" value="{{client.nit}}">{{client.razon}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Persona De Contacto</p>\n      <ion-input type="text" formControlName="contacto" placeholder="Persona de contacto"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Dirección</p>\n      <ion-input type="text" formControlName="direccion" placeholder="Dirección"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Teléfono De Contacto</p>\n      <ion-input type="text" formControlName="telefono" placeholder="Teléfono"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Correo</p>\n      <ion-input type="text" formControlName="correo" placeholder="Correo"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Productos o servicios prestados en el punto</p>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-select formControlName="productos_servicios">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n    <button ion-button type="submit" item-center [disabled]="!form.valid">Siguiente</button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/createSalePointView1/createSalePointView1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */]])
    ], CreateSalePointView_1Page);
    return CreateSalePointView_1Page;
}());

//# sourceMappingURL=createSalePointView1.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditClientPage = (function () {
    function EditClientPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.client = this.navParams.get('client');
        this.todo = this.formBuilder.group({
            razon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rep_legal: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ciudad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            barrio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            correo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            can_ven: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            sub_can_ven: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    EditClientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditClientPage');
    };
    EditClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editClient',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/editClient/editClient.html"*/`<!--\n  Generated template for the EditClientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="todo" (ngSubmit)="logForm(form)">\n    <ion-card>\n      <p class="subtitle">Razón Social<p>\n      <ion-input type="text" value="{{client.razon}}" formControlName="razon" placeholder="Razón social"></ion-input>\n    </ion-card>\n    <ion-card>\n        <p class="subtitle">Rut<p>\n        <ion-input type="text" value="{{client.rut}}" formControlName="rut" placeholder="Rut"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Nit</p>\n      <ion-input type="text" value="{{client.nit}}" formControlName="nit" placeholder="Nit"></ion-input>\n    </ion-card>\n    <ion-card>\n        <p class="subtitle">Representante Legal<p>\n        <ion-input type="text" value="{{client.rep_legal}}" formControlName="rep_legal" placeholder="Representante Legal"></ion-input>\n    </ion-card>\n    <ion-card>\n        <p class="subtitle">Ciudad<p>\n        <ion-input type="text" value="{{client.ciudad}}" formControlName="ciudad" placeholder="Ciudad"></ion-input>\n      </ion-card>\n    <ion-card>\n      <p class="subtitle">Dirección Principal</p>\n      <ion-input type="text" value="{{client.direccion}}" formControlName="direccion" placeholder="Dirección"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Barrio<p>\n      <ion-input type="text" value="{{client.barrio}}" formControlName="barrio" placeholder="Barrio"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Teléfono</p>\n      <ion-input type="text" value="{{client.telefono}}" formControlName="telefono" placeholder="Teléfono"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Correo</p>\n      <ion-input type="text" value="{{client.correo}}" formControlName="correo" placeholder="Correo"></ion-input>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Canal De Ventas</p>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-select formControlName="can_ven">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n    </ion-item>\n    </ion-card>\n    <ion-card>\n      <p class="subtitle">Subcanal De Ventas</p>\n      <ion-item>\n        <ion-label></ion-label>\n        <ion-select formControlName="sub_can_ven">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n    <button ion-button color="secondary" type="submit" [disabled]="!todo.valid">Guardar</button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/editClient/editClient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditClientPage);
    return EditClientPage;
}());

//# sourceMappingURL=editClient.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoreferentiationSalePointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GeoreferentiationSalePointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeoreferentiationSalePointPage = (function () {
    function GeoreferentiationSalePointPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.salePoint = this.navParams.get("salePoint");
    }
    GeoreferentiationSalePointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeoreferentiationSalePointPage');
        this.initMap();
    };
    GeoreferentiationSalePointPage.prototype.initMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: 4.6324935,
                    lng: -74.074753
                },
                zoom: 15,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        var marker1 = this.map.addMarkerSync({
            title: this.salePoint.cliente,
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: this.salePoint.lat,
                lng: this.salePoint.lng
            }
        });
    };
    GeoreferentiationSalePointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-georeferentiationSalePoint',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/georeferentiationSalePoint/georeferentiationSalePoint.html"*/`<!--\n  Generated template for the GeoreferentiationSalePointPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Georefenciación</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map" style="height:100%"></div>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/georeferentiationSalePoint/georeferentiationSalePoint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GeoreferentiationSalePointPage);
    return GeoreferentiationSalePointPage;
}());

//# sourceMappingURL=georeferentiationSalePoint.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListclientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showclient_showclient__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editClient_editClient__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_provider_clients_provider_clients__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Only browser

/**
 * Generated class for the ListclientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListclientsPage = (function () {
    function ListclientsPage(navCtrl, navParams, providerClients, persistence) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providerClients = providerClients;
        this.persistence = persistence;
        this.web = false;
        //Call providerClients and get Clients 
        this.getClients();
    }
    ListclientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListclientsPage');
    };
    ListclientsPage.prototype.getClients = function () {
        var _this = this;
        console.log("Consumir evento");
        this.persistence.readFileAsText("Clients.json")
            .then(function (data) {
            console.log(data);
            _this.clients = JSON.parse(data);
            _this.clientsAll = JSON.parse(data);
        }, function (err) {
            console.log(err);
            //Only browser ---------------
            _this.providerClients.getClients()
                .subscribe(function (data) {
                _this.clients = data;
                _this.clientsAll = data;
            }, function (err) {
                console.log(err);
            });
            //----------------------------
        });
    };
    ListclientsPage.prototype.showClient = function (client) {
        console.log(client);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__showclient_showclient__["a" /* ShowclientPage */], { client: client });
    };
    ListclientsPage.prototype.editClient = function (client) {
        console.log(client);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editClient_editClient__["a" /* EditClientPage */], { client: client });
    };
    ListclientsPage.prototype.getItems = function (ev) {
        this.clients = this.clientsAll;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.clients = this.clients.filter(function (client) {
                return (client.nit.indexOf(val)) > -1;
            });
        }
        console.log("evento");
    };
    ListclientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listclients',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/listclients/listclients.html"*/`<!--\n  Generated template for the ListclientsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Clientes</ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let client of clients">\n        <ion-avatar item-start>\n            <img src="{{client.foto}}">\n        </ion-avatar>\n        <ion-label class="label-client">\n            <h2 class="name_h2">{{client.razon}}</h2>\n            <p>{{client.nit}}</p>\n        </ion-label>\n        <button ion-button color="primary" item-end  (click)="showClient(client)">\n          <ion-icon name="md-search"></ion-icon>\n        </button>\n        <button ion-button color="primary" item-end  (click)="editClient(client)">\n            <ion-icon name="md-create"></ion-icon>\n        </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/listclients/listclients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */]])
    ], ListclientsPage);
    return ListclientsPage;
}());

//# sourceMappingURL=listclients.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowclientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_sale_points_provider_sale_points__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__georeferentiationSalePoint_georeferentiationSalePoint__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_provider_clients_provider_clients__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trackingMap_trackingMap__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowclientPage = (function () {
    function ShowclientPage(navCtrl, navParams, platform, provider, persistence, providerClients) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.provider = provider;
        this.persistence = persistence;
        this.providerClients = providerClients;
        this.views = "info";
        this.getSalePoints();
        this.getStaffs();
        this.getActivos();
        this.client = navParams.get('client');
        console.log(this.client);
    }
    ShowclientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowclientPage');
    };
    ShowclientPage.prototype.showTracking = function (data, type) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__trackingMap_trackingMap__["a" /* TrackingMapPage */], { data: data, salePoints: this.salePoints, type: type });
    };
    ShowclientPage.prototype.getStaffs = function () {
        var _this = this;
        this.providerClients.getStaff()
            .subscribe(function (data) {
            _this.staffs = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    ShowclientPage.prototype.getActivos = function () {
        var _this = this;
        this.providerClients.getActivos()
            .subscribe(function (data) {
            _this.activos = data;
        }, function (err) {
            console.log(err);
        });
    };
    ShowclientPage.prototype.getSalePoints = function () {
        var _this = this;
        this.persistence.readFileAsText("salePoints.json")
            .then(function (data) {
            _this.salePoints = JSON.parse(data);
            _this.salePoints = _this.salePoints.filter(function (salePoint) {
                return (salePoint.nit == _this.client.nit);
            });
        }, function (err) {
            console.log(err);
            //Only Browser--------------------
            _this.provider.getSalePoints()
                .subscribe(function (data) {
                _this.salePoints = data;
                _this.salePoints = _this.salePoints.filter(function (salePoint) {
                    return (salePoint.nit == _this.client.nit);
                });
                console.log(data);
                console.log(_this.salePoints);
            }, function (err) {
                console.log(err);
            });
            //---------------------------
        });
    };
    ShowclientPage.prototype.showGeoMap = function (salePoint) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__georeferentiationSalePoint_georeferentiationSalePoint__["a" /* GeoreferentiationSalePointPage */], { salePoint: salePoint });
    };
    ShowclientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showclient',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/showclient/showclient.html"*/`<!--\n  Generated template for the ShowclientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cliente</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="views" color="secondary">\n      <ion-segment-button value="info">\n        Información\n      </ion-segment-button>\n      <ion-segment-button value="activosPage">\n        Tracking\n      </ion-segment-button>\n      <ion-segment-button value="staff">\n        Personal\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [ngSwitch]="views">\n  <div *ngSwitchCase="\'info\'">\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="{{client.foto}}">\n    </ion-avatar>\n    <h2 class="client-title">{{client.razon}}</h2>\n    </ion-item>\n    <ion-card class="values-item">\n      <p class="subtitle">Rut</p>\n      {{client.rut}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Nit</p>\n      {{client.nit}}\n    </ion-card>\n    <ion-card class="values-item">\n        <p class="subtitle">Representante Legal</p>\n        {{client.rep_legal}}\n      </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Ciudad</p>\n      {{client.ciudad}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Barrio</p>\n      {{client.barrio}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Teléfono</p>\n      {{client.telefono}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Correo</p>\n      {{client.correo}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Representante Legal</p>\n      {{client.rep_legal}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Celular</p>\n      {{client.celular}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Ubicación</p>\n      {{client.direccion}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Canal De Ventas</p>\n      {{client.can_ven}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">SubCanal De Ventas</p>\n      {{client.sub_can_ven}}\n    </ion-card>\n    <ion-card class="values-item">\n      <p class="subtitle">Puntos De Venta</p>\n      <ion-list>\n        <ion-card class="values-item" *ngFor="let salePoint of salePoints" >\n          <button ion-button round color="primary" outline item-start (click)="showGeoMap(salePoint)">\n            <ion-icon name="md-flag"></ion-icon>\n              {{salePoint.direccion}}\n          </button>\n        </ion-card>\n      </ion-list>\n    </ion-card>\n  </div>\n  <div *ngSwitchCase="\'activosPage\'">\n    <button ion-item *ngFor="let activo of activos" (click)="showTracking(activo,\'activo\')">\n      <ion-icon name="{{activo.logo}}" item-start></ion-icon>\n        <h2>{{activo.nombre}}</h2>\n        <p>{{activo.placa}}</p>\n          \n    </button>\n  </div>  \n  <div *ngSwitchCase="\'staff\'">\n    <button ion-item *ngFor="let staffVar of staffs" (click)="showTracking(staffVar,\'staff\')">\n      <ion-icon name="md-person" item-start></ion-icon>\n        {{staffVar.nombre}}\n    </button>\n  </div>  \n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/showclient/showclient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_sale_points_provider_sale_points__["a" /* ProviderSalePointsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */]])
    ], ShowclientPage);
    return ShowclientPage;
}());

//# sourceMappingURL=showclient.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showCheck_showCheck__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TrackingMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackingMapPage = (function () {
    function TrackingMapPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.markers = [];
        this.data = this.navParams.get("data");
        this.salePoints = this.navParams.get("salePoints");
        this.type = this.navParams.get("type");
        if (this.type == "staff") {
            var _loop_1 = function () {
                var ite = this_1.salePoints[i];
                var temp = ite.checkStaff;
                temp = temp.filter(function (x) {
                    x.lat = ite.lat;
                    x.lng = ite.lng;
                    x.sede = ite.direccion;
                    return x.nombre == _this.data.nombre;
                });
                this_1.markers.push(temp);
            };
            var this_1 = this;
            for (var i = 0; i < this.salePoints.length; i++) {
                _loop_1();
            }
        }
        else if (this.type == "activo") {
            var _loop_2 = function () {
                var ite = this_2.salePoints[i];
                var temp = ite.checkActivo;
                temp = temp.filter(function (x) {
                    x.lat = ite.lat;
                    x.lng = ite.lng;
                    x.sede = ite.direccion;
                    return x.nombre == _this.data.nombre;
                });
                this_2.markers.push(temp);
            };
            var this_2 = this;
            for (var i = 0; i < this.salePoints.length; i++) {
                _loop_2();
            }
        }
        console.log(this.markers);
    }
    TrackingMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingMapPage');
        this.initMap();
    };
    TrackingMapPage.prototype.initMap = function () {
        var mapOptions = {
            camera: {
                target: {
                    lat: 4.6324935,
                    lng: -74.074753
                },
                zoom: 15,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        console.log(this.markers.length);
        for (var i = 0; i < this.markers.length; i++) {
            var iterator = this.markers[i][this.markers[i].length - 1];
            this.map.addMarkerSync({
                title: iterator.actividades,
                snippet: "Check In: " + iterator.checkin + " - Check Out: " + iterator.checkout,
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: iterator.lat,
                    lng: iterator.lng
                }
            });
        }
    };
    TrackingMapPage.prototype.showAllCheck = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__showCheck_showCheck__["a" /* ShowCheckPage */], { checks: this.markers });
    };
    TrackingMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trackingMap',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/trackingMap/trackingMap.html"*/`<!--\n  Generated template for the TrackingMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Tracking</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map" style="height:100%"></div>\n</ion-content>\n\n<ion-footer>\n  <button ion-button outline full color="secondary" (click)="showAllCheck()">Mostrar todos los check</button>\n</ion-footer>`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/trackingMap/trackingMap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TrackingMapPage);
    return TrackingMapPage;
}());

//# sourceMappingURL=trackingMap.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShowCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowCheckPage = (function () {
    function ShowCheckPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checks = this.navParams.get("checks");
        console.log(this.checks);
    }
    ShowCheckPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowCheckPage');
    };
    ShowCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showCheck',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/showCheck/showCheck.html"*/`<!--\n  Generated template for the ShowCheckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Checks</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let check of checks">\n        <ion-item *ngFor="let ite of check">\n          <ion-avatar item-start>\n              <ion-icon name="md-checkbox-outline"></ion-icon>\n          </ion-avatar>\n          <h2>Punto: {{ite.sede}}</h2>\n          <h3>Check In: {{ite.checkin}}</h3>\n          <h3>Check Out: {{ite.checkout}}</h3>\n          <p align="justify">Actividades: {{ite.actividades}}</p>\n        </ion-item>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/showCheck/showCheck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShowCheckPage);
    return ShowCheckPage;
}());

//# sourceMappingURL=showCheck.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkActivo/checkActivo.module": [
		297,
		13
	],
	"../pages/checkSalePointActivo/checkSalePointActivo.module": [
		298,
		12
	],
	"../pages/checkSalePointStaff/checkSalePointStaff.module": [
		299,
		11
	],
	"../pages/checkStaff/checkStaff.module": [
		300,
		10
	],
	"../pages/createClient/createClient.module": [
		301,
		9
	],
	"../pages/createSalePointView1/createSalePointView1.module": [
		302,
		8
	],
	"../pages/createSalePointView3/createSalePointView3.module": [
		303,
		7
	],
	"../pages/editClient/editClient.module": [
		304,
		6
	],
	"../pages/encuestaCliente/encuestaCliente.module": [
		305,
		5
	],
	"../pages/georeferentiationSalePoint/georeferentiationSalePoint.module": [
		306,
		4
	],
	"../pages/listclients/listclients.module": [
		307,
		3
	],
	"../pages/showCheck/showCheck.module": [
		308,
		2
	],
	"../pages/showclient/showclient.module": [
		309,
		1
	],
	"../pages/trackingMap/trackingMap.module": [
		310,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createSalePointView3_createSalePointView3__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Createsalepointview2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EncuestaClientePage = (function () {
    function EncuestaClientePage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            cantidad_vendedores_mostrador: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad_vendedores_externos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tiene_ferreteria: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tamanio_ferreteria: [''],
            tiene_bodega: [''],
            tamanio_bodega: [''],
            distribuye_cemento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tiene_camiones: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cantidad_camiones: [''],
            capacidad_carga: [''],
            marca_cemento1: [''],
            marca_cemento2: [''],
            marca_cemento3: [''],
            costo_cemento1: [''],
            costo_cemento2: [''],
            costo_cemento3: [''],
            promedio_venta_mensual: [''],
            proveedor_cemento: [''],
            dias_compra_cemento: [''],
            mejor_proveedor_materiales: [''],
            recibe_capacitacion_proveedores: [''],
            tipo_capacitacion_desea_proveedores: [''],
            recibe_apoyo_publicitario_proveedores: [''],
            tipo_publicidad_desea_proveedores: [''],
            agencia_bancaria: [''],
        });
        //Get data form View1
        this.formView1 = this.navParams.get('formView1');
        console.log(this.formView1);
        //
        this.flags = {
            tiene_ferreteria: "si",
            tiene_bodega: "si",
            tiene_camiones: "si",
        };
    }
    EncuestaClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Createsalepointview2Page');
    };
    EncuestaClientePage.prototype.sendForm = function (form) {
        console.log(form);
        var loader = this.getLoading('Cargando...', 3000);
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createSalePointView3_createSalePointView3__["a" /* CreateSalePointView3Page */], { formView1: this.formView1, formView2: this.form });
        loader.dismiss();
    };
    EncuestaClientePage.prototype.getLoading = function (msj, p_duration) {
        var loader = this.loadingCtrl.create({
            content: msj,
            duration: p_duration
        });
        return loader;
    };
    EncuestaClientePage.prototype.getAlert = function (msj, stl, but) {
        var alert = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [but]
        });
        return alert;
    };
    EncuestaClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encuestaCliente',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/encuestaCliente/encuestaCliente.html"*/`<!--\n  Generated template for the Createsalepointview2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Creación - Punto Cliente</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n      <ion-title>Paso 2<br>Encuesta Del PDV</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-card>\n      <p class="title">Datos Ferreteria<p>\n        <ion-card>\n          <p class="subtitle">Cantidad Vendedores De Mostrador</p>\n          <ion-input name="cantidad_vendedores_mostrador" id="cantidad_vendedores_mostrador" type="number" formControlName="cantidad_vendedores_mostrador" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Cantidad Vendedores Externos</p>\n          <ion-input type="number" formControlName="cantidad_vendedores_externos" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Tiene Ferreteria?</p>\n          <ion-list radio-group formControlName="tiene_ferreteria" [(ngModel)]="flags.tiene_ferreteria">\n            <ion-item>\n              <ion-label>Si</ion-label>\n              <ion-radio value="si" checked></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="no"></ion-radio>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n        <!--Solo si tiene ferreteria-->\n        <ion-card *ngIf="flags.tiene_ferreteria == \'si\'" >\n          <p class="subtitle">Tamaño De La Ferreteria</p>\n          <ion-input type="number" formControlName="tamanio_ferreteria" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card *ngIf="flags.tiene_ferreteria == \'si\'">\n          <p class="subtitle">¿Tiene Bodega?</p>\n          <ion-list radio-group formControlName="tiene_bodega" [(ngModel)]="flags.tiene_bodega">\n            <ion-item>\n              <ion-label>Si</ion-label>\n              <ion-radio value="si" checked></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="no"></ion-radio>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n        <!--Solo si tiene bodega-->\n        <ion-card *ngIf="flags.tiene_bodega == \'si\'">\n          <p class="subtitle">Tamaño Bodega En Metros Cuadrados</p>\n          <ion-input type="number" formControlName="tamanio_bodega" placeholder="0"></ion-input>\n        </ion-card>\n        <!--bodega-->\n        <!--ferreteria-->\n        <ion-card>\n          <p class="subtitle">¿Distribuye Cemento?</p>\n          <ion-list radio-group formControlName="distribuye_cemento" >\n            <ion-item>\n              <ion-label>Si</ion-label>\n              <ion-radio value="si" checked></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="no"></ion-radio>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Tiene Camiones Para Distribuir?</p>\n          <ion-list radio-group formControlName="tiene_camiones" [(ngModel)]="flags.tiene_camiones" >\n            <ion-item>\n              <ion-label>Si</ion-label>\n              <ion-radio value="si" checked></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>No</ion-label>\n              <ion-radio value="no"></ion-radio>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n        <!--Solo si tiene camiones-->\n        <ion-card *ngIf="flags.tiene_camiones == \'si\'">\n            <p class="subtitle">Cantidad De Camiones</p>\n            <ion-input type="number" formControlName="cantidad_camiones" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card *ngIf="flags.tiene_camiones == \'si\'">\n            <p class="subtitle">Capacidad De Carga</p>\n            <ion-input type="text" formControlName="capacidad_carga" placeholder="0"></ion-input>\n        </ion-card>\n        <!--camiones-->\n        <ion-card>\n            <p class="subtitle">Marca Cemento</p>\n            <ion-input type="text" formControlName="marca_cemento1" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Precio De Venta</p>\n          <ion-input type="text" formControlName="costo_cemento1" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n            <p class="subtitle">Marca Cemento</p>\n            <ion-input type="text" formControlName="marca_cemento2" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Precio De Venta</p>\n          <ion-input type="text" formControlName="costo_cemento2" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n            <p class="subtitle">Marca Cemento</p>\n            <ion-input type="text" formControlName="marca_cemento3" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Precio De Venta</p>\n          <ion-input type="text" formControlName="costo_cemento3" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Promedio Venta Mensual</p>\n          <ion-input type="text" formControlName="promedio_venta_mensual" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Proveedor De Cemento</p>\n          <ion-input type="text" formControlName="proveedor_cemento" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Cada Cuantos Días Compra Cemento?</p>\n          <ion-input type="text" formControlName="dias_compra_cemento" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">Mejor Proveedor De Materiaes</p>\n          <ion-input type="text" formControlName="mejor_proveedor_materiales" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Recibe Capacitación Por Parte De Los Proveedores?</p>\n          <ion-input type="text" formControlName="recibe_capacitacion_proveedores" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Qué Tipo De Capacitación Desearía Recibir?</p>\n          <ion-input type="text" formControlName="tipo_capacitacion_desea_proveedores" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Recibe Apoyo Publicitario De Los Proveedores?</p>\n          <ion-input type="text" formControlName="recibe_apoyo_publicitario_proveedores" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Qué Tipo De Apoyo Publicitario Desearía Recibir?</p>\n          <ion-input type="text" formControlName="tipo_publicidad_desea_proveedores" placeholder="0"></ion-input>\n        </ion-card>\n        <ion-card>\n          <p class="subtitle">¿Con Que Agencia Bancaria Trabaja?</p>\n          <ion-input type="text" formControlName="agencia_bancaria" placeholder="0"></ion-input>\n        </ion-card>\n    </ion-card>\n    <button ion-button (click)="sendForm(form)"type="submit" [disabled]="!form.valid">Siguiente</button>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/encuestaCliente/encuestaCliente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], EncuestaClientePage);
    return EncuestaClientePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=encuestaCliente.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_listclients_listclients__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_showclient_showclient__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_createClient_createClient__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_createSalePointView1_createSalePointView1__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_encuestaCliente_encuestaCliente__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_editClient_editClient__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_georeferentiationSalePoint_georeferentiationSalePoint__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_createSalePointView3_createSalePointView3__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_trackingMap_trackingMap__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkActivo_checkActivo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkStaff_checkStaff__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkSalePointStaff_checkSalePointStaff__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkSalePointActivo_checkSalePointActivo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_showCheck_showCheck__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_provider_clients_provider_clients__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_provider_sale_points_provider_sale_points__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_listclients_listclients__["a" /* ListclientsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_showclient_showclient__["a" /* ShowclientPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_createClient_createClient__["a" /* CreateClientPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_createSalePointView1_createSalePointView1__["a" /* CreateSalePointView_1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_encuestaCliente_encuestaCliente__["a" /* EncuestaClientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_editClient_editClient__["a" /* EditClientPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_georeferentiationSalePoint_georeferentiationSalePoint__["a" /* GeoreferentiationSalePointPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_createSalePointView3_createSalePointView3__["a" /* CreateSalePointView3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_trackingMap_trackingMap__["a" /* TrackingMapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkStaff_checkStaff__["a" /* CheckStaffPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkActivo_checkActivo__["a" /* CheckActivoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkSalePointStaff_checkSalePointStaff__["a" /* CheckSalePointStaffPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkSalePointActivo_checkSalePointActivo__["a" /* CheckSalePointActivoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_showCheck_showCheck__["a" /* ShowCheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/checkActivo/checkActivo.module#CheckActivoPageModule', name: 'CheckActivoPage', segment: 'checkActivo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkSalePointActivo/checkSalePointActivo.module#CheckSalePointActivoPageModule', name: 'CheckSalePointActivoPage', segment: 'checkSalePointActivo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkSalePointStaff/checkSalePointStaff.module#CheckSalePointStaffPageModule', name: 'CheckSalePointStaffPage', segment: 'checkSalePointStaff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkStaff/checkStaff.module#CheckStaffPageModule', name: 'CheckStaffPage', segment: 'checkStaff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createClient/createClient.module#CreateClientPageModule', name: 'CreateClientPage', segment: 'createClient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createSalePointView1/createSalePointView1.module#CreateSalePointView_1PageModule', name: 'CreateSalePointView_1Page', segment: 'createSalePointView1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createSalePointView3/createSalePointView3.module#CreateSalePointView3PageModule', name: 'CreateSalePointView3Page', segment: 'createSalePointView3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editClient/editClient.module#EditClientPageModule', name: 'EditClientPage', segment: 'editClient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/encuestaCliente/encuestaCliente.module#EncuestaClientePageModule', name: 'EncuestaClientePage', segment: 'encuestaCliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/georeferentiationSalePoint/georeferentiationSalePoint.module#GeoreferentiationSalePointPageModule', name: 'GeoreferentiationSalePointPage', segment: 'georeferentiationSalePoint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listclients/listclients.module#ListclientsPageModule', name: 'ListclientsPage', segment: 'listclients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showCheck/showCheck.module#ShowCheckPageModule', name: 'ShowCheckPage', segment: 'showCheck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showclient/showclient.module#ShowclientPageModule', name: 'ShowclientPage', segment: 'showclient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trackingMap/trackingMap.module#TrackingMapPageModule', name: 'TrackingMapPage', segment: 'trackingMap', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_listclients_listclients__["a" /* ListclientsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_showclient_showclient__["a" /* ShowclientPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_createClient_createClient__["a" /* CreateClientPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_createSalePointView1_createSalePointView1__["a" /* CreateSalePointView_1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_encuestaCliente_encuestaCliente__["a" /* EncuestaClientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_editClient_editClient__["a" /* EditClientPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_georeferentiationSalePoint_georeferentiationSalePoint__["a" /* GeoreferentiationSalePointPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_createSalePointView3_createSalePointView3__["a" /* CreateSalePointView3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_trackingMap_trackingMap__["a" /* TrackingMapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkStaff_checkStaff__["a" /* CheckStaffPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkActivo_checkActivo__["a" /* CheckActivoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkSalePointStaff_checkSalePointStaff__["a" /* CheckSalePointStaffPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkSalePointActivo_checkSalePointActivo__["a" /* CheckSalePointActivoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_showCheck_showCheck__["a" /* ShowCheckPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_22__providers_provider_sale_points_provider_sale_points__["a" /* ProviderSalePointsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__["d" /* Spherical */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PersistenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PersistenceProvider = (function () {
    function PersistenceProvider(http, file) {
        this.http = http;
        this.file = file;
        console.log('Hello PersistenceProvider Provider');
    }
    PersistenceProvider.prototype.updateJSON = function (data, nameFile) {
        this.file.createFile(this.file.externalDataDirectory, nameFile, true)
            .then(function (data) {
            console.log("Creacion File exitosa");
            console.log(data);
        }, function (err) {
            console.log("Creacion File Error");
            console.log(err);
        });
        this.file.writeExistingFile(this.file.externalDataDirectory, nameFile, data)
            .then(function (data) {
            console.log("Sobreescritura File exitosa");
            console.log(data);
        }, function (err) {
            console.log("Sobreescritura File Error");
            console.log(err);
        });
    };
    PersistenceProvider.prototype.readFileAsText = function (nameFile) {
        return this.file.readAsText(this.file.externalDataDirectory, nameFile);
    };
    PersistenceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], PersistenceProvider);
    return PersistenceProvider;
}());

//# sourceMappingURL=persistence.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_listclients_listclients__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_createClient_createClient__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_createSalePointView1_createSalePointView1__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_checkActivo_checkActivo__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_checkStaff_checkStaff__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Clientes', component: __WEBPACK_IMPORTED_MODULE_5__pages_listclients_listclients__["a" /* ListclientsPage */] },
            { title: 'Crear Cliente', component: __WEBPACK_IMPORTED_MODULE_6__pages_createClient_createClient__["a" /* CreateClientPage */] },
            { title: 'Crear Punto de Venta', component: __WEBPACK_IMPORTED_MODULE_7__pages_createSalePointView1_createSalePointView1__["a" /* CreateSalePointView_1Page */] },
            { title: 'Check Personal', component: __WEBPACK_IMPORTED_MODULE_9__pages_checkStaff_checkStaff__["a" /* CheckStaffPage */] },
            { title: 'Check Activos', component: __WEBPACK_IMPORTED_MODULE_8__pages_checkActivo_checkActivo__["a" /* CheckActivoPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderClientsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProviderClientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProviderClientsProvider = (function () {
    function ProviderClientsProvider(http) {
        this.http = http;
        console.log('Hello ProviderClientsProvider Provider');
    }
    ProviderClientsProvider.prototype.getClients = function () {
        return this.http.get('assets/data/clients.json');
    };
    ProviderClientsProvider.prototype.getStaff = function () {
        return this.http.get('assets/data/staff.json');
    };
    ProviderClientsProvider.prototype.getActivos = function () {
        return this.http.get('assets/data/activos.json');
    };
    ProviderClientsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProviderClientsProvider);
    return ProviderClientsProvider;
}());

//# sourceMappingURL=provider-clients.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderSalePointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProviderSalePointsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProviderSalePointsProvider = (function () {
    function ProviderSalePointsProvider(http) {
        this.http = http;
        console.log('Hello ProviderSalePointsProvider Provider');
    }
    ProviderSalePointsProvider.prototype.getSalePoints = function () {
        return this.http.get('assets/data/salePoints.json');
    };
    ProviderSalePointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProviderSalePointsProvider);
    return ProviderSalePointsProvider;
}());

//# sourceMappingURL=provider-sale-points.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_clients_provider_clients__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider_sale_points_provider_sale_points__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, providerClients, events, file, providerSPoints) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.providerClients = providerClients;
        this.events = events;
        this.file = file;
        this.providerSPoints = providerSPoints;
        this.providerClients.getClients()
            .subscribe(function (data) {
            _this.file.checkFile(_this.file.externalDataDirectory, "Clients.json")
                .then(function (data) {
                if (data == false) {
                    _this.createFileJSONClients(data);
                    console.log(data);
                }
            }, function (err) {
                _this.createFileJSONClients(data);
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
        this.providerSPoints.getSalePoints()
            .subscribe(function (data) {
            _this.file.checkFile(_this.file.externalDataDirectory, "salePoints.json")
                .then(function (data) {
                if (data == false) {
                    _this.createFileJSONSalePoints(data);
                    console.log(data);
                }
            }, function (err) {
                _this.createFileJSONSalePoints(data);
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    }
    HomePage.prototype.createFileJSONClients = function (data) {
        this.file.createFile(this.file.externalDataDirectory, "Clients.json", true)
            .then(function (data) {
            console.log("Creación File exitosa Clients");
            console.log(data);
        }, function (err) {
            console.log("Creación File Error Clients");
            console.log(err);
        });
        this.file.writeExistingFile(this.file.externalDataDirectory, "Clients.json", data)
            .then(function (data) {
            console.log("Sobreescritura File exitosa Clients.json");
            console.log(data);
        }, function (err) {
            console.log("Sobreescritura File Error Clients.json");
            console.log(err);
        });
    };
    HomePage.prototype.createFileJSONSalePoints = function (data) {
        this.file.createFile(this.file.externalDataDirectory, "salePoints.json", true)
            .then(function (data) {
            console.log("Creación File exitosa salePoints.json");
            console.log(data);
        }, function (err) {
            console.log("Creación File Error salePoints.json");
            console.log(err);
        });
        this.file.writeExistingFile(this.file.externalDataDirectory, "salePoints.json", data)
            .then(function (data) {
            console.log("Sobreescritura File exitosa salePoints.json");
            console.log(data);
        }, function (err) {
            console.log("Sobreescritura File Error salePoints.json");
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n  <ion-card class="welcome-card">\n    <div>\n        <img class="img-home" class="logo" src="assets/imgs/logoHome.png"/>\n        <ion-card-header>\n          <ion-card-title class="title-home">Nombre de la app</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p align="justify">Now that your app has been created, you\'ll want to start building out features and components. Check out some of the resources below for next steps.</p>\n        </ion-card-content>\n    </div>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_clients_provider_clients__["a" /* ProviderClientsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__providers_provider_sale_points_provider_sale_points__["a" /* ProviderSalePointsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSalePointView3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CreateSalePointView3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateSalePointView3Page = (function () {
    function CreateSalePointView3Page(navCtrl, navParams, loadingCtrl, alertCtrl, persistence, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.persistence = persistence;
        this.formBuilder = formBuilder;
        this.markers = false;
        this.formView1 = this.navParams.get('formView1');
    }
    CreateSalePointView3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateSalePointView3Page');
        this.initMap();
    };
    CreateSalePointView3Page.prototype.initMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 4.6324935,
                    lng: -74.074753
                },
                zoom: 15,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        this.map.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_CLICK)
            .subscribe(function (data) {
            console.log(data);
            if (_this.markers == false) {
                _this.marker = _this.map.addMarkerSync({
                    title: 'holaa',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: data[0].lat,
                        lng: data[0].lng
                    }
                });
                _this.localization = data;
                _this.markers = true;
            }
        });
    };
    CreateSalePointView3Page.prototype.getAlert = function (msj, stl, but) {
        var alert = this.alertCtrl.create({
            title: msj,
            subTitle: stl,
            buttons: [but]
        });
        return alert;
    };
    CreateSalePointView3Page.prototype.getLoading = function (msj, p_duration) {
        var loader = this.loadingCtrl.create({
            content: msj,
            duration: p_duration
        });
        return loader;
    };
    CreateSalePointView3Page.prototype.saveSalePoint = function () {
        var _this = this;
        console.log(this.formView1.value);
        console.log(this.localization);
        if (this.markers) {
            var x = Math.random() * (100000 - 30) + 30;
            var value1 = this.formView1.value;
            var value3 = this.localization[0];
            var json_1 = { 'cliente': value1.cliente, 'codigo': x, 'nit': value1.cliente, 'contacto': value1.contacto, 'correo': value1.correo,
                'direccion': value1.direccion, 'pro_pres': value1.productos_servicios,
                'telefono': value1.telefono,
                'lat': value3.lat, 'lng': value3.lng, 'checkStaff': [], 'checkActivo': [] };
            var loading_1 = this.getLoading("Cargando", 300);
            loading_1.present();
            this.persistence.readFileAsText("salePoints.json")
                .then(function (data) {
                console.log(data);
                var clients = JSON.parse(data);
                clients.push(json_1);
                _this.persistence.updateJSON(clients, "salePoints.json");
                console.log("Debug # 001");
                loading_1.dismiss();
                var alert = _this.getAlert("Creacion Punto de venta", "Exito", "Aceptar");
                alert.present();
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
                var alert = _this.getAlert("Creacion Punto de venta", "Falló", "Aceptar");
                alert.present();
            });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    CreateSalePointView3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createSalePointView3',template:/*ion-inline-start:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/createSalePointView3/createSalePointView3.html"*/`<!--\n  Generated template for the CreateSalePointView3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>createSalePointView3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map" style="height:100%"></div>\n  <button ion-button color="secondary" (click)="saveSalePoint()">Enviar</button>\n</ion-content>\n`/*ion-inline-end:"/Users/juanpablocamargo/Desktop/Proyectos/appcensopdvHeroku/src/pages/createSalePointView3/createSalePointView3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], CreateSalePointView3Page);
    return CreateSalePointView3Page;
}());

//# sourceMappingURL=createSalePointView3.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map