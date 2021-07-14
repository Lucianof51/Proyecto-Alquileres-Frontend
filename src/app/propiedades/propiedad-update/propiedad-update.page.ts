import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropiedadesService } from '../propiedades.service';

@Component({
  selector: 'app-propiedad-update',
  templateUrl: './propiedad-update.page.html',
  styleUrls: ['./propiedad-update.page.scss'],
})
export class PropiedadUpdatePage implements OnInit {

  constructor(private propiedadService: PropiedadesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  id2: any;
   ngOnInit() {
     this.activatedRoute.paramMap.subscribe(paramMap => {
       if (!paramMap.has('propiedadId')) {
         // redirect
         this.router.navigate(['/propiedades']);
       }
       const recipeId = paramMap.get('propiedadId');
       console.log(recipeId);
       this.id2 = recipeId;
   });
 }

  savePropiedad(ubicacion2: HTMLInputElement, estado2: HTMLInputElement, tipo2: HTMLInputElement){
    const ubicacion = ubicacion2.value;
    const estado = estado2.value;
    const tipo = tipo2.value;
    const id = this.id2;

    const val = {
      id,
     ubicacion,
     estado,
     tipo
    };
    this.propiedadService.updatePropiedad(val).subscribe(res => {
       alert(res.toString());
   });

    console.log(val);
   }

 }
