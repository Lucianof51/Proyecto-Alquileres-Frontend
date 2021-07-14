import { Component, OnInit } from '@angular/core';
import { InquilinosService } from 'src/app/inquilinos/inquilinos.service';
import { LocadoresService } from 'src/app/locadores/locadores.service';
import { GarantesService } from '../../garantes/garantes.service';
import {PropiedadesService} from '../../propiedades/propiedades.service';
import {ContratosService} from '../contratos.service';
import { Persona } from 'src/app/persona.model';

@Component({
  selector: 'app-contrato-add',
  templateUrl: './contrato-add.page.html',
  styleUrls: ['./contrato-add.page.scss'],
})
export class ContratoAddPage implements OnInit {

  constructor(private garantesService: GarantesService, private propiedadesService: PropiedadesService,
              private locadoresService: LocadoresService, private contratoService: ContratosService,
              private inquilinosService: InquilinosService) { }
  propiedades = [];
  garantes = [];
  locadores = [];
  inquilinos = [];

  ngOnInit() {
    this.propiedadesService.getPropiedades()
      .subscribe(data => {
      console.log(data);
      this.propiedades = data;
      });

    this.locadoresService.getLocadores()
      .subscribe(data => {
        console.log(data);
        this.locadores = data;
      });

    this.inquilinosService.getInquilinos()
        .subscribe(data => {
          console.log(data);
          this.inquilinos = data;
        });

    this.garantesService.getGarantes()
    .subscribe(data => {
      console.log(data);
      this.garantes = data;
    });
  }
  // tslint:disable-next-line:variable-name
  saveNewContrato(valor2, honorarios2, punitorios2: HTMLInputElement,
                  // tslint:disable-next-line:variable-name
                  fecha_ingreso2: HTMLInputElement, fecha_egreso2: HTMLInputElement, fecha_rescision2: HTMLInputElement,
                  // tslint:disable-next-line:variable-name
                  tipo_contrato2: HTMLInputElement, vencimiento_pago2: HTMLInputElement, propiedad2: HTMLInputElement,
                  locador2: HTMLInputElement, inquilino2: HTMLInputElement, garante2: HTMLInputElement)
                  {
                  const valor = valor2.value;
                  // tslint:disable-next-line:no-unused-expression
                  const honorarios = (valor2.value * honorarios2.value) / 100;
                  const punitorios = punitorios2.value;
                  // tslint:disable-next-line:variable-name
                  const fecha_ingreso = fecha_ingreso2.value;
                  // tslint:disable-next-line:variable-name
                  const fecha_egreso = fecha_egreso2.value;
                  // tslint:disable-next-line:variable-name
                  const fecha_rescision = fecha_rescision2.value;
                  // tslint:disable-next-line:variable-name
                  const tipo_contrato = tipo_contrato2.value;
                  // tslint:disable-next-line:variable-name
                  const vencimiento_pago = vencimiento_pago2.value;
                  const propiedad = propiedad2.value;
                  const locador = locador2.value;
                  const inquilino = inquilino2.value;
                  const garante = garante2.value;

                  const val = {
                    valor,
                    honorarios,
                    punitorios,
                    fecha_ingreso,
                    fecha_egreso,
                    fecha_rescision,
                    tipo_contrato,
                    vencimiento_pago,
                    propiedad,
                    locador,
                    inquilino,
                    garante };
                  this.contratoService.addContrato(val).subscribe(res => {
                    alert(res.toString());
                });
                  console.log(val);
                }
}
