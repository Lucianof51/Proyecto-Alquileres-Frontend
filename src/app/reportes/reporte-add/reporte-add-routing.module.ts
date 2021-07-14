import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteAddPage } from './reporte-add.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteAddPageRoutingModule {}
