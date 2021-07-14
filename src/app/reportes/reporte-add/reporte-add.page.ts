import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';
import { ReporteService } from '../reporte.service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-reporte-add',
  templateUrl: './reporte-add.page.html',
  styleUrls: ['./reporte-add.page.scss'],
})
export class ReporteAddPage implements OnInit {
  propiedades = [];
  proveedores = [];
  // tslint:disable-next-line:max-line-length
  constructor(private reporteService: ReporteService, private propiedadesService: PropiedadesService, private proveedorService: ProveedoresService, private imagePicker: ImagePicker) { }

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

// tslint:disable-next-line:max-line-length
saveNewReporte(descripcion2: HTMLInputElement, estado2: HTMLInputElement, fecha2: HTMLInputElement, proveedor2: HTMLInputElement, propiedad2: HTMLInputElement){
const descripcion = descripcion2.value;
const estado = estado2.value;
const fecha = fecha2.value;
const proveedor = proveedor2.value;
const propiedad = propiedad2.value;
const val = {
descripcion,
estado,
fecha,
proveedor,
propiedad
};
this.reporteService.addReporte(val).subscribe(res => {
alert(res.toString());
});

console.log(val);
}
abrirGaleria() {
  let options: ImagePickerOptions = {
    maximumImagesCount: 10
  };

  this.imagePicker.getPictures(options).then((results) => {
    for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
    }
  }, (err) => { });
}
}
