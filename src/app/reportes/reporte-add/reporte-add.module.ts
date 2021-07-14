import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteAddPageRoutingModule } from './reporte-add-routing.module';

import { ReporteAddPage } from './reporte-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteAddPageRoutingModule
  ],
  declarations: [ReporteAddPage]
})
export class ReporteAddPageModule {}
