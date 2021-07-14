import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratoAddPage } from './contrato-add.page';

const routes: Routes = [
  {
    path: '',
    component: ContratoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratoAddPageRoutingModule {}
