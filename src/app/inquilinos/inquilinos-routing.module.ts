import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquilinosPage } from './inquilinos.page';

const routes: Routes = [
  {
    path: '',
    component: InquilinosPage
  },
  {
    path: 'inquilino-detalle',
    loadChildren: () => import('./inquilino-detalle/inquilino-detalle.module').then( m => m.InquilinoDetallePageModule)
  },
  {
    path: 'inquilino-add',
    loadChildren: () => import('./inquilino-add/inquilino-add.module').then( m => m.InquilinoAddPageModule)
  },
  {
    path: 'inquilino-update',
    loadChildren: () => import('./inquilino-update/inquilino-update.module').then( m => m.InquilinoUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquilinosPageRoutingModule {}
