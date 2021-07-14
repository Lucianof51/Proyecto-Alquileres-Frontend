import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratoDetallePage } from './contrato-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ContratoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratoDetallePageRoutingModule {}
