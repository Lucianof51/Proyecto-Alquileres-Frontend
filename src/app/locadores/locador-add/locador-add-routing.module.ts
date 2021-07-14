import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocadorAddPage } from './locador-add.page';

const routes: Routes = [
  {
    path: '',
    component: LocadorAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocadorAddPageRoutingModule {}
