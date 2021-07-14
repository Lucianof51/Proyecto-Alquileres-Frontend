import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquileresCobradosPage } from './alquileres-cobrados.page';

const routes: Routes = [
  {
    path: '',
    component: AlquileresCobradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquileresCobradosPageRoutingModule {}
