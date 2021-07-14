import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAlquileresPage } from './lista-alquileres.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAlquileresPage
  },
  {
    path: 'alquileres-cobrados',
    loadChildren: () => import('./alquileres-cobrados/alquileres-cobrados.module').then( m => m.AlquileresCobradosPageModule)
  },
  {
    path: 'alquileres-vencimiento',
    loadChildren: () => import('./alquileres-vencimiento/alquileres-vencimiento.module').then( m => m.AlquileresVencimientoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAlquileresPageRoutingModule {}
