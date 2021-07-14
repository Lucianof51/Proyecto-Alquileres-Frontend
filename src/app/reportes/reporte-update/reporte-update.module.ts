import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteUpdatePageRoutingModule } from './reporte-update-routing.module';

import { ReporteUpdatePage } from './reporte-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteUpdatePageRoutingModule
  ],
  declarations: [ReporteUpdatePage]
})
export class ReporteUpdatePageModule {}
