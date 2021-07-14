import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAlquileresPageRoutingModule } from './lista-alquileres-routing.module';

import { ListaAlquileresPage } from './lista-alquileres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAlquileresPageRoutingModule
  ],
  declarations: [ListaAlquileresPage]
})
export class ListaAlquileresPageModule {}
