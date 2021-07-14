import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InquilinosService } from 'src/app/inquilinos/inquilinos.service';
import { LocadoresService } from 'src/app/locadores/locadores.service';
import { Persona } from 'src/app/persona.model';
import { Aviso } from '../aviso.model';
import { AvisoService } from '../aviso.service';

@Component({
  selector: 'app-aviso-detalle',
  templateUrl: './aviso-detalle.page.html',
  styleUrls: ['./aviso-detalle.page.scss'],
})
export class AvisoDetallePage implements OnInit {
   // tslint:disable-next-line:max-line-length
  constructor(private locadorService: LocadoresService, private avisoService: AvisoService, private activatedRoute: ActivatedRoute, private inquilinosService: InquilinosService, private router: Router, private alertCtrl: AlertController) { }
  aviso: Aviso;
  locador: Persona;
  locadorId: any;
  inquilino: Persona;
  inquilinoId: any;
 ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('avisoId')) {
       // redirect
       this.router.navigate(['/avisos']);
     }
     const recipeId = paramMap.get('avisoId');
     this.avisoService.getAviso(recipeId)
   .subscribe(data => {
     this.aviso = data;
     this.locadorId = this.aviso.locador;
     this.inquilinoId = this.aviso.inquilino;
   });
   });
 }

 ionViewDidEnter() {
   this.locadorService.getLocador(this.locadorId)
   .subscribe(data => {
     this.locador = data;
   });
   this.inquilinosService.getInquilino(this.inquilinoId)
   .subscribe(data => {
     this.inquilino = data;
   });
 }
 async deleteAviso(){
 const alertElement = await this.alertCtrl.create({
   header: 'Estas seguro de querer eliminar',
   message: 'Se cuidadoso',
   buttons: [
     {
      text: 'Cancel',
      role: 'cancel'
     },
     {
       text: 'Delete',
       handler: () => {
         this.avisoService.deleteAviso(this.aviso.id);
         this.router.navigate(['/avisos']);
       }
     }
   ]
 });
 await alertElement.present();
}
}
