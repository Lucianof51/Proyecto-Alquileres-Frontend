import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquilinoAddPage } from './inquilino-add.page';

const routes: Routes = [
  {
    path: '',
    component: InquilinoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquilinoAddPageRoutingModule {}
