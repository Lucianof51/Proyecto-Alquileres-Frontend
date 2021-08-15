import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/persona.model';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.page.html',
  styleUrls: ['./proveedor-detalle.page.scss'],
})
export class ProveedorDetallePage implements OnInit {

  proveedor: Persona;
 // tslint:disable-next-line:max-line-length
 constructor(private activatedRoute: ActivatedRoute, private proveedorService: ProveedoresService, private router: Router, private alertCtrl: AlertController) { }

 ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('proveedorId')) {
       // redirect
       this.router.navigate(['/proveedores']);
     }
     const recipeId = paramMap.get('proveedorId');
     console.log(recipeId);
     this.proveedorService.getProveedor(recipeId)
   .subscribe(data => {
     this.proveedor = data;
     console.log(this.proveedor);
   });
   });
 }
 async deleteProveedor(){
 const alertElement = await this.alertCtrl.create({
   header: 'Estas seguro de querer eliminar',
   
   buttons: [
     {
      text: 'Cancel',
      role: 'cancel'
     },
     {
       text: 'Delete',
       handler: () => {
         this.proveedorService.deleteProveedor(this.proveedor.id);
         this.router.navigate(['/proveedores']);
       }
     }
   ]
 });
 await alertElement.present();
}
}
