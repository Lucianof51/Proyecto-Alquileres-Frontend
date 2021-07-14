import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropiedadAddPage } from './propiedad-add.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadAddPageRoutingModule {}
