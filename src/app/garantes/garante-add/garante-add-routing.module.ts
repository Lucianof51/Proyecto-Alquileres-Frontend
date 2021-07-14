import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaranteAddPage } from './garante-add.page';

const routes: Routes = [
  {
    path: '',
    component: GaranteAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaranteAddPageRoutingModule {}
