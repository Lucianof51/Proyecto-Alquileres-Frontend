import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocadorDetallePageRoutingModule } from './locador-detalle-routing.module';

import { LocadorDetallePage } from './locador-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocadorDetallePageRoutingModule
  ],
  declarations: [LocadorDetallePage]
})
export class LocadorDetallePageModule {}
