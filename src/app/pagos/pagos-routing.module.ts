import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosPage } from './pagos.page';

const routes: Routes = [
  {
    path: '',
    component: PagosPage
  },
  {
    path: 'pago-add',
    loadChildren: () => import('./pago-add/pago-add.module').then( m => m.PagoAddPageModule)
  },
  {
    path: 'pago-detalle',
    loadChildren: () => import('./pago-detalle/pago-detalle.module').then( m => m.PagoDetallePageModule)
  },
  {
    path: 'pago-update',
    loadChildren: () => import('./pago-update/pago-update.module').then( m => m.PagoUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosPageRoutingModule {}
