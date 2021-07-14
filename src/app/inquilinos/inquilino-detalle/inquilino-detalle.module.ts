import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InquilinoDetallePageRoutingModule } from './inquilino-detalle-routing.module';

import { InquilinoDetallePage } from './inquilino-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InquilinoDetallePageRoutingModule
  ],
  declarations: [InquilinoDetallePage]
})
export class InquilinoDetallePageModule {}
