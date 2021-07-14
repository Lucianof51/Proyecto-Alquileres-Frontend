import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratosPage } from './contratos.page';

const routes: Routes = [
  {
    path: '',
    component: ContratosPage
  },
  {
    path: 'contrato-detalle',
    loadChildren: () => import('./contrato-detalle/contrato-detalle.module').then( m => m.ContratoDetallePageModule)
  },
  {
    path: 'contrato-add',
    loadChildren: () => import('./contrato-add/contrato-add.module').then( m => m.ContratoAddPageModule)
  },
  {
    path: 'contrato-update',
    loadChildren: () => import('./contrato-update/contrato-update.module').then( m => m.ContratoUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratosPageRoutingModule {}
