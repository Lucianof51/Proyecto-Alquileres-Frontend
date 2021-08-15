import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/persona.model';
import { InquilinosService } from '../inquilinos.service';

@Component({
  selector: 'app-inquilino-detalle',
  templateUrl: './inquilino-detalle.page.html',
  styleUrls: ['./inquilino-detalle.page.scss'],
})
export class InquilinoDetallePage implements OnInit {

  inquilino: Persona;
 // tslint:disable-next-line:max-line-length
 constructor(private activatedRoute: ActivatedRoute, private inquilinoService: InquilinosService, private router: Router, private alertCtrl: AlertController) { }

 ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('inquilinoId')) {
       // redirect
       this.router.navigate(['/inquilinos']);
     }
     const recipeId = paramMap.get('inquilinoId');
     console.log(recipeId);
     this.inquilinoService.getInquilino(recipeId)
   .subscribe(data => {
     this.inquilino = data;
     console.log(this.inquilino);
   });
   });
 }
 async deleteInquilino(){
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
         this.inquilinoService.deleteInquilino(this.inquilino.id);
         this.router.navigate(['/inquilinos']);
       }
     }
   ]
 });
 await alertElement.present();
}
}
