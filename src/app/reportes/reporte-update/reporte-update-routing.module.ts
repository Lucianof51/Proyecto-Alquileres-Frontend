import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteUpdatePage } from './reporte-update.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteUpdatePageRoutingModule {}
