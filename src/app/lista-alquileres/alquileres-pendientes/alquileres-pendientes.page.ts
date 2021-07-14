import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/pagos/pagos.service';
import { Pago } from 'src/app/pagos/pago.model';
import { ContratosService } from 'src/app/contratos/contratos.service';
import { PropiedadesService } from 'src/app/propiedades/propiedades.service';

@Component({
  selector: 'app-alquileres-pendientes',
  templateUrl: './alquileres-pendientes.page.html',
  styleUrls: ['./alquileres-pendientes.page.scss'],
})
export class AlquileresPendientesPage implements OnInit {
m: any;
date: any;
anio: any;
pagos: Pago[];
propiedadNombre: any;
propiedadId: any;
  constructor(private pagoService: PagosService,  private contratosService: ContratosService, private propiedadService: PropiedadesService) { }

  ngOnInit() {
    function getMes(index){
      const mes = new Array(12);
      mes[0] = 1;
      mes[1] = 2;
      mes[2] = 3;
      mes[3] = 4;
      mes[4] = 5;
      mes[5] = 6;
      mes[6] = 7;
      mes[7] = 8;
      mes[8] = 9;
      mes[9] = 10;
      mes[10] = 11;
      mes[11] = 12;
      return mes[index];
    }
    const d = new Date();
    this.m = getMes(d.getMonth());
    console.log(this.m);
    this.date = d.getDate();
    this.anio = d.getFullYear();
    this.pagoService.getPagos()
    .subscribe(data => {
      this.pagos = data;
      this.propiedadNombre = this.propiedadService.getPropiedadId(data.propiedad).ubicacion
     // this.propiedadId = this.contratoService.getContratoId(data.contrato).propiedad;
     
  });
  this.pagoService.getPagos()
  .subscribe(data => {
    this.pagos = data;
   // this.propiedadNombre = this.propiedadesService.getPropiedadId(data.propiedad).ubicacion
    this.propiedadId = this.contratosService.getContratoId(data.contrato).propiedad;
   
});
  }

  ionViewDidEnter(){
        // FILTRO Y MAPEO DE TODOS LOS PAGOS PENDIENTEES EN EL MES CORRIENTE
        this.pagoService.getPagos() 
        .subscribe(data => {
          this.pagos = data.filter(data => new Date(data.fecha_pago).getMonth()+1 === this.m-1 && new Date(data.fecha_pago).getFullYear() === this.anio);
          this.pagos = this.pagos.map(pago => {
            return {
              id: pago.id,
              monto: pago.monto,
              honorarios: pago.honorarios,
              punitorios: pago.punitorios,
              fecha_pago: pago.fecha_pago,
              agua: pago.agua,
              luz: pago.luz,
              gas: pago.gas,
              expensas: pago.expensas,
              contrato: pago.contrato,
              dia: new Date(pago.fecha_pago).getDate(),
              mes: new Date(pago.fecha_pago).getMonth(),
              year: new Date(pago.fecha_pago).getFullYear(),
              propiedadId: this.contratosService.getContratoId(pago.contrato).propiedad,
              propiedadName: this.propiedadService.getPropiedadId(this.contratosService.getContratoId(pago.contrato).propiedad).ubicacion
            };
            });
          console.log(this.pagos);
        });
    }
}
