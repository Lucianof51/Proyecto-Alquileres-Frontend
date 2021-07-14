import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Pago } from '../pago.model';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-pago-detalle',
  templateUrl: './pago-detalle.page.html',
  styleUrls: ['./pago-detalle.page.scss'],
})
export class PagoDetallePage implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private pagoService: PagosService, private router: Router, private alertCtrl: AlertController) { }
  pago: Pago;
  id: any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pagoId')) {
        // redirect
        this.router.navigate(['/pagos']);
      }
      const recipeId = paramMap.get('pagoId');
      console.log(recipeId);
      this.id = recipeId;
      this.pagoService.getPago(recipeId)
    .subscribe(data => {
      this.pago = data;
      console.log(this.pago);
    });
    });
  }
  async deletePago(){
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
          this.pagoService.deletePago(this.pago.id);
          this.router.navigate(['/pagos', this.id]);
        }
      }
    ]
  });
  await alertElement.present();
 }
 }
