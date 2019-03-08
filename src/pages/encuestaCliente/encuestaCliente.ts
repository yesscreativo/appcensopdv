import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup , FormArray} from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Createsalepointview2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuestaCliente',
  templateUrl: 'encuestaCliente.html',
})
export class EncuestaClientePage {

  private formView1: FormGroup;
  private form : FormGroup;
  private flags: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                private formBuilder: FormBuilder, public loadingCtrl: LoadingController,
                  public alertCtrl: AlertController) 
  {
    this.form = this.formBuilder.group({
      cantidad_vendedores_mostrador: ['', Validators.required],
      cantidad_vendedores_externos: ['', Validators.required],
      tiene_ferreteria: ['', Validators.required],
      tamanio_ferreteria: [''],
      tiene_bodega: [''],
      tamanio_bodega: [''],
      distribuye_cemento: ['', Validators.required],
      tiene_camiones: ['', Validators.required],
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
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Createsalepointview2Page');
  }

  sendForm(form){
    console.log(form)
    let loader = this.getLoading('Cargando...',3000);
    loader.present();
    this.navCtrl.push(HomePage);
    loader.dismiss();
  }

  getLoading(msj,p_duration) {
    const loader = this.loadingCtrl.create({
      content: msj,
      duration: p_duration
    });
    return loader;
  }

  getAlert(msj, stl, but) {
    const alert = this.alertCtrl.create({
      title: msj,
      subTitle: stl,
      buttons: [but]
    });
    return alert;
  }
}
