import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaPage } from './caja.page';

const routes: Routes = [
  {
    path: '',
    component: CajaPage
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaPageRoutingModule {}
