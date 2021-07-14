import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocadoresPage } from './locadores.page';

const routes: Routes = [
  {
    path: '',
    component: LocadoresPage
  },
  {
    path: 'locador-update',
    loadChildren: () => import('./locador-update/locador-update.module').then( m => m.LocadorUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocadoresPageRoutingModule {}
