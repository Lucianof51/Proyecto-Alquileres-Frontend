import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoAddPage } from './aviso-add.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoAddPageRoutingModule {}
