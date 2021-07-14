import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratoUpdatePage } from './contrato-update.page';

const routes: Routes = [
  {
    path: '',
    component: ContratoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratoUpdatePageRoutingModule {}
