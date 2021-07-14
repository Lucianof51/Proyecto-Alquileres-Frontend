import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContratosService } from '../contratos.service';
import {Contrato} from '../contrato.model';
import { LocadoresService } from 'src/app/locadores/locadores.service';
import { Persona } from 'src/app/persona.model';
@Component({
  selector: 'app-contrato-detalle',
  templateUrl: './contrato-detalle.page.html',
  styleUrls: ['./contrato-detalle.page.scss'],
})
export class ContratoDetallePage implements OnInit {
  contratos: Contrato;
  locador: Persona;
  locadorId: any;
  // tslint:disable-next-line:max-line-length
  constructor(private locadorService: LocadoresService, private activatedRoute: ActivatedRoute, private contratoService: ContratosService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contratoId')) {
        // redirect
        this.router.navigate(['/contratos']);
      }
      const recipeId = paramMap.get('contratoId');
      this.contratoService.getContrato(recipeId)
    .subscribe(data => {
      this.contratos = data;
      this.locadorId = this.contratos.locador;
      console.log(this.contratos);
    });
    });
  }

  ionViewDidEnter() {
    this.locadorService.getLocador(this.contratos.locador)
    .subscribe(data => {
      console.log(this.locadorId);
      this.locador = data;
    });
    console.log(this.locador.nombre);
  }
  async deleteContrato(){
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
          this.contratoService.deleteContrato(this.contratos.id);
          this.router.navigate(['/contratos']);
        }
      }
    ]
  });
  await alertElement.present();
 }
 }
