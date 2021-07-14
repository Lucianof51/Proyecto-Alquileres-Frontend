import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquileresVencimientoPage } from './alquileres-vencimiento.page';

const routes: Routes = [
  {
    path: '',
    component: AlquileresVencimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquileresVencimientoPageRoutingModule {}
