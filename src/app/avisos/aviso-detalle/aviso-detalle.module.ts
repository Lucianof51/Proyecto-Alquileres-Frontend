import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoDetallePageRoutingModule } from './aviso-detalle-routing.module';

import { AvisoDetallePage } from './aviso-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoDetallePageRoutingModule
  ],
  declarations: [AvisoDetallePage]
})
export class AvisoDetallePageModule {}
