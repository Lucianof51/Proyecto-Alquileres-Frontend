import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquileresVencimientoPageRoutingModule } from './alquileres-vencimiento-routing.module';

import { AlquileresVencimientoPage } from './alquileres-vencimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquileresVencimientoPageRoutingModule
  ],
  declarations: [AlquileresVencimientoPage]
})
export class AlquileresVencimientoPageModule {}
