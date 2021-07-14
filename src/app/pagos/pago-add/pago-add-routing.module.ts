import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoAddPage } from './pago-add.page';

const routes: Routes = [
  {
    path: '',
    component: PagoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoAddPageRoutingModule {}
