import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocadoresService } from '../locadores.service';

@Component({
  selector: 'app-locador-add',
  templateUrl: './locador-add.page.html',
  styleUrls: ['./locador-add.page.scss'],
})
export class LocadorAddPage implements OnInit {

  constructor(private locadorService: LocadoresService, private router: Router) { }

  ngOnInit() {
  }

// tslint:disable-next-line:max-line-length
saveNewLocador(nombre2: HTMLInputElement, apellido2: HTMLInputElement, DNI2: HTMLInputElement, CUIT2: HTMLInputElement, telefono2: HTMLInputElement, direccion2: HTMLInputElement,
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
    this.locadorService.addLocadores(val).subscribe(res => {
       alert(res.toString());
   });

    console.log(val);
}
}