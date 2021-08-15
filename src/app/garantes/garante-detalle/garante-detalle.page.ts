import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/persona.model';
import { GarantesService } from '../garantes.service';

@Component({
  selector: 'app-garante-detalle',
  templateUrl: './garante-detalle.page.html',
  styleUrls: ['./garante-detalle.page.scss'],
})
export class GaranteDetallePage implements OnInit {

  garante: Persona;
 // tslint:disable-next-line:max-line-length
 constructor(private activatedRoute: ActivatedRoute, private garanteService: GarantesService, private router: Router, private alertCtrl: AlertController) { }

 ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('garanteId')) {
       // redirect
       this.router.navigate(['/garantes']);
     }
     const recipeId = paramMap.get('garanteId');
     console.log(recipeId);
     this.garanteService.getGarante(recipeId)
   .subscribe(data => {
     this.garante = data;
     console.log(this.garante);
   });
   });
 }
 async deleteGarante(){
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
         this.garanteService.deleteGarante(this.garante.id);
         this.router.navigate(['/garantes']);
       }
     }
   ]
 });
 await alertElement.present();
}
}
