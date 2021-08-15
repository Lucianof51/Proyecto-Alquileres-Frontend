import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropiedadUpdatePageRoutingModule } from './propiedad-update-routing.module';

import { PropiedadUpdatePage } from './propiedad-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropiedadUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PropiedadUpdatePage]
})
export class PropiedadUpdatePageModule {}
