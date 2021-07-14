import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GarantesService } from '../garantes.service';

@Component({
  selector: 'app-garante-update',
  templateUrl: './garante-update.page.html',
  styleUrls: ['./garante-update.page.scss'],
})
export class GaranteUpdatePage implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private garanteService: GarantesService, private router: Router, private alertCtrl: AlertController) { }
  id2: any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('garanteId')) {
        // redirect
        this.router.navigate(['/garantes']);
      }
      const recipeId = paramMap.get('garanteId');
      console.log(recipeId);
      this.id2 = recipeId;
  });
}

// tslint:disable-next-line:max-line-length
saveNewGarante(nombre2: HTMLInputElement, apellido2: HTMLInputElement, DNI2: HTMLInputElement, CUIT2: HTMLInputElement, telefono2: HTMLInputElement, direccion2: HTMLInputElement,
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

    this.garanteService.updateGarantes(val).subscribe(res => {
       alert(res.toString());
   });

    console.log(val);
}
}
