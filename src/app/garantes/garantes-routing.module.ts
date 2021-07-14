import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarantesPage } from './garantes.page';

const routes: Routes = [
  {
    path: '',
    component: GarantesPage
  },
  {
    path: 'garante-update',
    loadChildren: () => import('./garante-update/garante-update.module').then( m => m.GaranteUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarantesPageRoutingModule {}
