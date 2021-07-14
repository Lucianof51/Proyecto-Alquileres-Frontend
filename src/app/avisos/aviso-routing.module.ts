import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoPage } from './aviso.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoPage
  },
  {
    path: 'aviso-update',
    loadChildren: () => import('./aviso-update/aviso-update.module').then( m => m.AvisoUpdatePageModule)
  },
  {
    path: 'aviso-detalle',
    loadChildren: () => import('./aviso-detalle/aviso-detalle.module').then( m => m.AvisoDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoPageRoutingModule {}
