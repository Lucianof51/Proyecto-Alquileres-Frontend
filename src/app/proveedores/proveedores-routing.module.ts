import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresPage } from './proveedores.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresPage
  },
  {
    path: 'proveedor-detalle',
    loadChildren: () => import('./proveedor-detalle/proveedor-detalle.module').then( m => m.ProveedorDetallePageModule)
  },
  {
    path: 'proveedor-add',
    loadChildren: () => import('./proveedor-add/proveedor-add.module').then( m => m.ProveedorAddPageModule)
  },
  {
    path: 'proveedor-update',
    loadChildren: () => import('./proveedor-update/proveedor-update.module').then( m => m.ProveedorUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedoresPageRoutingModule {}
