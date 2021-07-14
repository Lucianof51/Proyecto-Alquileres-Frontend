import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropiedadUpdatePageRoutingModule } from './propiedad-update-routing.module';

import { PropiedadUpdatePage } from './propiedad-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropiedadUpdatePageRoutingModule
  ],
  declarations: [PropiedadUpdatePage]
})
export class PropiedadUpdatePageModule {}
