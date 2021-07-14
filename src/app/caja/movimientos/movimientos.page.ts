import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/contratos/contrato.model';
import { ContratosService } from 'src/app/contratos/contratos.service';
import { PagosService } from 'src/app/pagos/pagos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  pagos = [];
  contratoId: any;
  contratos: Contrato[];
  constructor(private pagoService: PagosService, private contratoService: ContratosService) { }

  ngOnInit() {
    this.pagoService.getPagos()
    .subscribe(data => {
      this.pagos = data;
      console.log(this.pagos);
    });
  }

}
