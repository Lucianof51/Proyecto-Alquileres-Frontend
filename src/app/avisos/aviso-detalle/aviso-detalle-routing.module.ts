import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoDetallePage } from './aviso-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoDetallePageRoutingModule {}
