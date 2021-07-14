import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocadorUpdatePage } from './locador-update.page';

const routes: Routes = [
  {
    path: '',
    component: LocadorUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocadorUpdatePageRoutingModule {}
