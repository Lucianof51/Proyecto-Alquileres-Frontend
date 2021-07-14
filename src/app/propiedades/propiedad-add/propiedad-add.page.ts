import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PropiedadesService } from '../propiedades.service';

@Component({
  selector: 'app-propiedad-add',
  templateUrl: './propiedad-add.page.html',
  styleUrls: ['./propiedad-add.page.scss'],
})
export class PropiedadAddPage implements OnInit {

  constructor(private propiedadService: PropiedadesService,
              private router: Router) { }

  @Input() dep: any;
  PropiedadNombre: any;
  PropiedadEstado: any;
  PropiedadTipo: any;

  ngOnInit() {
  }

  saveNewPlace(ubicacion2: HTMLInputElement, estado2: HTMLInputElement, tipo2: HTMLInputElement){
   const ubicacion = ubicacion2.value;
   const estado = estado2.value;
   const tipo = tipo2.value;

   const val = {
    ubicacion,
    estado,
    tipo
   };
   this.propiedadService.addPropiedad(val).subscribe(res => {
      alert(res.toString());
  });

   console.log(val);
  }

}
