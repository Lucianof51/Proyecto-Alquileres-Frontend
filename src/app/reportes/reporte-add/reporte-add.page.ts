import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';
import { ReporteService } from '../reporte.service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { AlertController } from '@ionic/angular';
import { ChildActivationStart, Router } from '@angular/router';
import { Images } from '../images.model';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-reporte-add',
  templateUrl: './reporte-add.page.html',
  styleUrls: ['./reporte-add.page.scss'],
})
export class ReporteAddPage implements OnInit {
  propiedades = [];
  proveedores = [];
  imagenDamage: string;
  images: any = [];
  imagenes: Images[];
  cover: File;
  habilitar: boolean = false;
  // tslint:disable-next-line:max-line-length
  constructor(private reporteService: ReporteService, private propiedadesService: PropiedadesService, private proveedorService: ProveedoresService, private imagePicker: ImagePicker, private alertCtrl: AlertController, private router: Router, private http: HttpClient ) { }

ngOnInit() {
  this.propiedadesService.getPropiedades()
      .subscribe(data => {
      this.propiedades = data;
      });
  this.proveedorService.getProveedores()
      .subscribe(data => {
      console.log(data);
      this.proveedores = data;
      });
}
onCoverChanged(event: any){
  this.cover = event.target.files[0];
  this.habilitar = true;
}

// tslint:disable-next-line:max-line-length
  async saveNewReporte(descripcion2: HTMLInputElement, estado2: HTMLInputElement, fecha2: HTMLInputElement, proveedor2: HTMLInputElement, propiedad2: HTMLInputElement, costo2){
const descripcion = descripcion2.value;
const estado = estado2.value;
const fecha = fecha2.value;
const proveedor = proveedor2.value;
const propiedad = propiedad2.value;
const costo = costo2.value;

// console.log(descripcion, estado, fecha, proveedor, propiedad, costo, cover);
const uploadData = new FormData();
uploadData.append('descripcion', descripcion);
uploadData.append('estado', estado);
uploadData.append('fecha', fecha);
uploadData.append('proveedor', proveedor);
uploadData.append('propiedad', propiedad);
uploadData.append('costo', costo);
if(this.habilitar)
{
  uploadData.append('cover', this.cover, this.cover.name);
}
this.http.post('http://127.0.0.1:8000/reporteprueba', uploadData).subscribe(
  data => console.log(data),
  error => console.log(error)
);
}

}
/*
// tslint:disable-next-line:max-line-length

  async saveNewReporte(descripcion2: HTMLInputElement, estado2: HTMLInputElement, fecha2: HTMLInputElement, proveedor2: HTMLInputElement, propiedad2: HTMLInputElement, costo2){
const descripcion = descripcion2.value;
const estado = estado2.value;
const fecha = fecha2.value;
const proveedor = proveedor2.value;
const propiedad = propiedad2.value;
const costo = costo2.value;
console.log(descripcion, estado, fecha, proveedor, propiedad, costo);
const uploadData = new FormData();
uploadData.append('descripcion', descripcion);
uploadData.append('estado', estado);
uploadData.append('fecha', fecha);
uploadData.append('proveedor', proveedor);
uploadData.append('propiedad', propiedad);
uploadData.append('costo', costo);
uploadData.append('cover', this.cover, this.cover.name)
this.http.post('http://127.0.0.1:8000/libro/', uploadData).subscribe(
  data => console.log(data),
  error => console.log(error)
);
const alertElement = await this.alertCtrl.create({
  header: 'Reporte generado',
  message: 'Tu reporte se ha generado con exito',
  buttons: [
    {
      text: 'OK',
      handler: () => {
        this.router.navigate(['/reportes']);
      }
    }
  ]
});
await alertElement.present();
}
*/