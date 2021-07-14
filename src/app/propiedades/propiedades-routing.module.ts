import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropiedadesPage } from './propiedades.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadesPage
  },
  {
    path: 'propiedad-detalle',
    loadChildren: () => import('./propiedad-detalle/propiedad-detalle.module').then( m => m.PropiedadDetallePageModule)
  },
  {
    path: 'propiedad-add',
    loadChildren: () => import('./propiedad-add/propiedad-add.module').then( m => m.PropiedadAddPageModule)
  },
  {
    path: 'propiedad-update',
    loadChildren: () => import('./propiedad-update/propiedad-update.module').then( m => m.PropiedadUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadesPageRoutingModule {}
