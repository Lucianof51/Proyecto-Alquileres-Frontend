import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorAddPage } from './proveedor-add.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorAddPageRoutingModule {}
