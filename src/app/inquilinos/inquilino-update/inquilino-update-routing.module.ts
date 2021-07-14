import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquilinoUpdatePage } from './inquilino-update.page';

const routes: Routes = [
  {
    path: '',
    component: InquilinoUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquilinoUpdatePageRoutingModule {}
