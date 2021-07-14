import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratoDetallePageRoutingModule } from './contrato-detalle-routing.module';

import { ContratoDetallePage } from './contrato-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoDetallePageRoutingModule
  ],
  declarations: [ContratoDetallePage]
})
export class ContratoDetallePageModule {}
