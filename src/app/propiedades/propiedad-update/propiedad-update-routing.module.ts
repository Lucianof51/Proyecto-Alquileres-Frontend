import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropiedadUpdatePage } from './propiedad-update.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadUpdatePageRoutingModule {}
