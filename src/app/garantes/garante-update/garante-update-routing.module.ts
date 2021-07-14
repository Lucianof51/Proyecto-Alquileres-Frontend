import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaranteUpdatePage } from './garante-update.page';

const routes: Routes = [
  {
    path: '',
    component: GaranteUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaranteUpdatePageRoutingModule {}
