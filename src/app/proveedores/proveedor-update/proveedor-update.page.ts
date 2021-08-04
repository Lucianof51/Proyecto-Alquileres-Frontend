import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedor-update',
  templateUrl: './proveedor-update.page.html',
  styleUrls: ['./proveedor-update.page.scss'],
})
export class ProveedorUpdatePage implements OnInit {

   // tslint:disable-next-line:max-line-length
   constructor(private activatedRoute: ActivatedRoute, private proveedorService: ProveedoresService, private router: Router, private alertCtrl: AlertController) { }
   id2: any;
   ngOnInit() {
     this.activatedRoute.paramMap.subscribe(paramMap => {
       if (!paramMap.has('proveedorId')) {
         // redirect
         this.router.navigate(['/proveedores']);
       }
       const recipeId = paramMap.get('proveedorId');
       console.log(recipeId);
       this.id2 = recipeId;
   });
 }

 // tslint:disable-next-line:max-line-length
 async saveProveedor(nombre2: HTMLInputElement, apellido2: HTMLInputElement, DNI2: HTMLInputElement, CUIT2: HTMLInputElement, telefono2: HTMLInputElement, direccion2: HTMLInputElement,
   // tslint:disable-next-line:align
   email2: HTMLInputElement, cuentaBancaria2: HTMLInputElement){
     const nombre = nombre2.value;
     const apellido = apellido2.value;
     const DNI = DNI2.value;
     const CUIT = CUIT2.value;
     const telefono = telefono2.value;
     const direccion = direccion2.value;
     const email = email2.value;
     const id = this.id2;
     console.log(id);
     // tslint:disable-next-line:variable-name
     const cuenta_bancaria = cuentaBancaria2.value;
     const val = {
       id,
       nombre,
       apellido,
       DNI,
       CUIT,
       telefono,
       direccion,
       email,
       cuenta_bancaria
     };

     this.proveedorService.updateProveedor(val).subscribe(res => {
        alert(res.toString());
    });
    const alertElement = await this.alertCtrl.create({
      header: 'Proveedor actualizado',
      message: 'El proveedor se ha actualizado con exito',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/proveedores']);
          }
        }
      ]
     });
     await alertElement.present();
         console.log(val);
     }
 }
