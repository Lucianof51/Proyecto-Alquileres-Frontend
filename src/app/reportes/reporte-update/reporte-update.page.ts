import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-reporte-update',
  templateUrl: './reporte-update.page.html',
  styleUrls: ['./reporte-update.page.scss'],
})
export class ReporteUpdatePage implements OnInit {
  propiedades = [];
  proveedores = [];
  constructor(private reporteService: ReporteService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private propiedadesService: PropiedadesService,
              private proveedorService: ProveedoresService) { }

id2: any;
ngOnInit() {
this.propiedadesService.getPropiedades()
  .subscribe(data => {
  this.propiedades = data;
  });
this.proveedorService.getProveedores()
  .subscribe(data => {
  this.proveedores = data;
  });
this.activatedRoute.paramMap.subscribe(paramMap => {
if (!paramMap.has('reporteId')) {
// redirect
this.router.navigate(['/reportes']);
}
const recipeId = paramMap.get('reporteId');
this.id2 = recipeId;
});
}

// tslint:disable-next-line:max-line-length
saveReporte(descripcion2: HTMLInputElement, estado2: HTMLInputElement, fecha2: HTMLInputElement, proveedor2: HTMLInputElement, propiedad2: HTMLInputElement){
const descripcion = descripcion2.value;
const estado = estado2.value;
const fecha = fecha2.value;
const proveedor = proveedor2.value;
const propiedad = propiedad2.value;
const id = this.id2;

const val = {
id,
descripcion,
estado,
fecha,
proveedor,
propiedad
};
this.reporteService.updateReporte(val).subscribe(res => {
alert(res.toString());
});

console.log(val);
}

}
