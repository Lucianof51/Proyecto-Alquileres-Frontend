import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContratosService } from '../contratos.service';
import {Contrato} from '../contrato.model';
import { LocadoresService } from 'src/app/locadores/locadores.service';
import { Persona } from 'src/app/persona.model';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';
import { InquilinosService } from 'src/app/inquilinos/inquilinos.service';
import { GarantesService } from 'src/app/garantes/garantes.service';
import { Propiedad } from 'src/app/propiedades/propiedad.model';
@Component({
  selector: 'app-contrato-detalle',
  templateUrl: './contrato-detalle.page.html',
  styleUrls: ['./contrato-detalle.page.scss'],
})
export class ContratoDetallePage implements OnInit {
  contratos: Contrato;
  locador: Persona;
  locadorId: any;
  inquilino: Persona;
  garante: Persona;
  propiedad: Propiedad;
  contratoId: any;
  // tslint:disable-next-line:max-line-length
  constructor(private propiedadService: PropiedadesService, private inquilinoService: InquilinosService, private garanteService: GarantesService, private locadorService: LocadoresService, private activatedRoute: ActivatedRoute, private contratoService: ContratosService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contratoId')) {
        // redirect
        this.router.navigate(['/contratos']);
      }
      const recipeId = paramMap.get('contratoId');
      this.contratoId = recipeId;
      this.contratoService.getContrato(recipeId)
    .subscribe(data => {
      this.contratos = data;
      this.locadorId = this.contratos.locador;
      console.log(this.contratos);
      console.log(this.locadorId);
    });
    });
  }

  ionViewDidEnter() {
    this.locadorService.getLocador(this.contratos.locador)
    .subscribe(data => {
      this.locador = data;
    });
    this.propiedadService.getPropiedad(this.contratos.propiedad)
    .subscribe(data => {
      this.propiedad = data;
    });
    this.inquilinoService.getInquilino(this.contratos.inquilino)
    .subscribe(data => {
      this.inquilino = data;
    });
    this.garanteService.getGarante(this.contratos.garante)
    .subscribe(data => {
      this.garante = data;
    });
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

 updateContrato(contratoId){
  this.router.navigate(['/contrato-update', contratoId])
}
 }
