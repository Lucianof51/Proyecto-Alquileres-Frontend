import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorUpdatePage } from './proveedor-update.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorUpdatePageRoutingModule {}
