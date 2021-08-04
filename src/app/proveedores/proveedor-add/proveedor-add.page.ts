import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProveedoresService } from '../proveedores.service';
@Component({
  selector: 'app-proveedor-add',
  templateUrl: './proveedor-add.page.html',
  styleUrls: ['./proveedor-add.page.scss'],
})
export class ProveedorAddPage implements OnInit {

  constructor(private proveedorService: ProveedoresService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:max-line-length
  async saveNewProveedor(nombre2: HTMLInputElement, apellido2: HTMLInputElement, DNI2: HTMLInputElement, CUIT2: HTMLInputElement, telefono2: HTMLInputElement, direccion2: HTMLInputElement,
  // tslint:disable-next-line:align
  email2: HTMLInputElement, cuentaBancaria2: HTMLInputElement){
    const nombre = nombre2.value;
    const apellido = apellido2.value;
    const DNI = DNI2.value;
    const CUIT = CUIT2.value;
    const telefono = telefono2.value;
    const direccion = direccion2.value;
    const email = email2.value;
    // tslint:disable-next-line:variable-name
    const cuenta_bancaria = cuentaBancaria2.value;
    const val = {
      nombre,
      apellido,
      DNI,
      CUIT,
      telefono,
      direccion,
      email,
      cuenta_bancaria
    };
    this.proveedorService.addProveedor(val).subscribe(res => {
       alert(res.toString());
   });
   const alertElement = await this.alertCtrl.create({
    header: 'Proveedor registrado',
    message: 'El proveedor se ha registrado con exito',
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
}
}
