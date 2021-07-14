import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaranteDetallePageRoutingModule } from './garante-detalle-routing.module';

import { GaranteDetallePage } from './garante-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaranteDetallePageRoutingModule
  ],
  declarations: [GaranteDetallePage]
})
export class GaranteDetallePageModule {}
