import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportePage } from './reporte.page';

const routes: Routes = [
  {
    path: '',
    component: ReportePage
  },
  {
    path: 'reporte-detalle',
    loadChildren: () => import('./reporte-detalle/reporte-detalle.module').then( m => m.ReporteDetallePageModule)
  },
  {
    path: 'reporte-add',
    loadChildren: () => import('./reporte-add/reporte-add.module').then( m => m.ReporteAddPageModule)
  },
  {
    path: 'reporte-update',
    loadChildren: () => import('./reporte-update/reporte-update.module').then( m => m.ReporteUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportePageRoutingModule {}
