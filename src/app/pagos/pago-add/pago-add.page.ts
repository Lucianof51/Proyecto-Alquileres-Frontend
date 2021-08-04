import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratosService } from 'src/app/contratos/contratos.service';
import { PagosService } from '../pagos.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pago-add',
  templateUrl: './pago-add.page.html',
  styleUrls: ['./pago-add.page.scss'],
})
export class PagoAddPage implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contratoService: ContratosService, private pagoService: PagosService, private alertCtrl: AlertController) { }
  id: any;
  contratos = [];
  state = { checked: ''};
  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pagoId')) {
        // redirect
        this.router.navigate(['/home']);
      }
      const recipeId = paramMap.get('pagoId');
      this.id = recipeId;
      this.contratoService.getContratos()
      .subscribe(data => {
      console.log(data);
      this.contratos = data;
      });
    });
  }

  checkbox(e) {
    e = false;
    console.log(e);
  }
  setState(arg0: { input: any; }) {
    throw new Error('Method not implemented.');
  }
  async saveNewPago(monto2, honorarios2, punitorios2: HTMLInputElement,
    // tslint:disable-next-line:variable-name
              fecha_pago2: HTMLInputElement, agua2,  luz2: HTMLInputElement, gas2: HTMLInputElement,
              expensas2: HTMLInputElement){
  const monto = monto2.value;
  // tslint:disable-next-line:no-unused-expression
  const honorarios = (monto2.value * honorarios2.value) / 100;
  const punitorios = punitorios2.value;
  // tslint:disable-next-line:variable-name
  const fecha_pago = fecha_pago2.value;
  let agua = agua2.value;
  if (agua === ''){
    agua = null;
    }
    else{
      agua = agua2.value;
    }
  const luz = luz2.value;
  const gas = gas2.value;
  const expensas = expensas2.value;
  const contrato = this.id;
  const val = {
    monto,
    honorarios,
    punitorios,
    fecha_pago,
    agua,
    luz,
    gas,
    expensas,
    contrato
  };
  this.pagoService.addPago(val).subscribe(res => {
    alert(res.toString());
  });
  const alertElement = await this.alertCtrl.create({
    header: 'Pago registrado',
    message: 'Tu pago se ha registrado con exito',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.router.navigate(['/pagos', this.id]);
        }
      }
    ]
  });
  await alertElement.present();
  }
}
