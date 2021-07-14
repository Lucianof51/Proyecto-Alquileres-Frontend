import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InquilinosService } from '../inquilinos.service';

@Component({
  selector: 'app-inquilino-update',
  templateUrl: './inquilino-update.page.html',
  styleUrls: ['./inquilino-update.page.scss'],
})
export class InquilinoUpdatePage implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private inquilinoService: InquilinosService, private router: Router) { }
  id2: any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('inquilinoId')) {
        // redirect
        this.router.navigate(['/inquilinos']);
      }
      const recipeId = paramMap.get('inquilinoId');
      console.log(recipeId);
      this.id2 = recipeId;
  });
}

// tslint:disable-next-line:max-line-length
saveInquilino(nombre2: HTMLInputElement, apellido2: HTMLInputElement, DNI2: HTMLInputElement, CUIT2: HTMLInputElement, telefono2: HTMLInputElement, direccion2: HTMLInputElement,
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

    this.inquilinoService.updateInquilino(val).subscribe(res => {
       alert(res.toString());
   });

    console.log(val);
}
}
