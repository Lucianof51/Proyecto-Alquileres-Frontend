import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratosService } from '../contratos/contratos.service';
import { Pago } from './pago.model';
import { PagosService } from './pagos.service';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  pagos: Pago[];
  id: any;
  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private pagoService: PagosService, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contratoId')) {
        // redirect
        this.router.navigate(['/home']);
      }
      const recipeId = paramMap.get('contratoId');
      this.id = recipeId;
      this.pagoService.getPagos()
    .subscribe(data => {
      this.pagos = this.pagoService.getPagoContrato(this.id);
    });
      this.pagoService.guardarDatos();
  });
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contratoId')) {
        // redirect
        this.router.navigate(['/home']);
      }
      const recipeId = paramMap.get('contratoId');
      this.id = recipeId;
      this.pagoService.getPagos()
    .subscribe(data => {
      this.pagos = this.pagoService.getPagoContrato(this.id);
    });
      this.pagoService.guardarDatos();
  });
  }

  addNewPago(pagoId){
    pagoId = this.id;
    this.router.navigate(['/pago-add', pagoId]);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  updatePago(pagoId){
    this.router.navigate(['/pago-update', pagoId]);
    }
  verPagos(pagoId){
    this.router.navigate(['/pagos', this.id, pagoId]);
    }

}
