import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from 'src/app/persona.model';
import { LocadoresService } from '../locadores.service';

@Component({
  selector: 'app-locador-detalle',
  templateUrl: './locador-detalle.page.html',
  styleUrls: ['./locador-detalle.page.scss'],
})
export class LocadorDetallePage implements OnInit {

  locador: Persona;
  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private locadorService: LocadoresService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('locadorId')) {
        // redirect
        this.router.navigate(['/locadores']);
      }
      const recipeId = paramMap.get('locadorId');
      console.log(recipeId);
      this.locadorService.getLocador(recipeId)
    .subscribe(data => {
      this.locador = data;
      console.log(this.locador);
    });
    });
  }
  async deleteLocador(){
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
          this.locadorService.deleteLocador(this.locador.id);
          this.router.navigate(['/locadores']);
        }
      }
    ]
  });
  await alertElement.present();
 }
 }
