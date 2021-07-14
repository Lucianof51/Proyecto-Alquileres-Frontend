import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquileresPendientesPage } from './alquileres-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: AlquileresPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquileresPendientesPageRoutingModule {}
