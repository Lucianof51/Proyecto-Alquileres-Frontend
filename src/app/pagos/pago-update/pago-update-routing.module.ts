import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoUpdatePage } from './pago-update.page';

const routes: Routes = [
  {
    path: '',
    component: PagoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoUpdatePageRoutingModule {}
