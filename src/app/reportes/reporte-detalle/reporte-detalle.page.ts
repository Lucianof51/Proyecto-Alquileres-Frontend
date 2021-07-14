import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/persona.model';
import { Propiedad } from 'src/app/propiedades/propiedad.model';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';
import { Reporte } from '../reporte.model';
import { ReporteService } from '../reporte.service';

@Component({
  selector: 'app-reporte-detalle',
  templateUrl: './reporte-detalle.page.html',
  styleUrls: ['./reporte-detalle.page.scss'],
})
export class ReporteDetallePage implements OnInit {
 // tslint:disable-next-line:max-line-length
 constructor(private propiedadService: PropiedadesService, private reporteService: ReporteService, private activatedRoute: ActivatedRoute, private proveedorService: ProveedoresService, private router: Router, private alertCtrl: AlertController) { }
  reporte: Reporte;
  proveedor: Persona;
  proveedorId: any;
  propiedad: Propiedad;
  propiedadId: any;
 ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('reporteId')) {
       // redirect
       this.router.navigate(['/reportes']);
     }
     const recipeId = paramMap.get('reporteId');
     this.reporteService.getReporte(recipeId)
   .subscribe(data => {
     this.reporte = data;
     this.proveedorId = this.reporte.proveedor;
     this.propiedadId = this.reporte.propiedad;
   });
   });
 }

 ionViewDidEnter() {
   this.proveedorService.getProveedor(this.proveedorId)
   .subscribe(data => {
     this.proveedor = data;
   });
   this.propiedadService.getPropiedad(this.propiedadId)
   .subscribe(data => {
     this.propiedad = data;
   });
 }
 async deleteReporte(){
 const alertElement = await this.alertCtrl.create({
   header: 'Estas seguro de querer eliminar',
   message: 'Se cuidadoso',
   buttons: [
     {
      text: 'Cancel',
      role: 'cancel'
     },
     {
       text: 'Delete',
       handler: () => {
         this.reporteService.deleteReporte(this.reporte.id);
         this.router.navigate(['/reportes']);
       }
     }
   ]
 });
 await alertElement.present();
}
}
