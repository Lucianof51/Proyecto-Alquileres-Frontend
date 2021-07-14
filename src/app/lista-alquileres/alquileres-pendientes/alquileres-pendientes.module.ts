import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquileresPendientesPageRoutingModule } from './alquileres-pendientes-routing.module';

import { AlquileresPendientesPage } from './alquileres-pendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquileresPendientesPageRoutingModule
  ],
  declarations: [AlquileresPendientesPage]
})
export class AlquileresPendientesPageModule {}
