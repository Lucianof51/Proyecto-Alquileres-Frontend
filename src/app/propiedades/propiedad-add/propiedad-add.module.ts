import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropiedadAddPageRoutingModule } from './propiedad-add-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { PropiedadAddPage } from './propiedad-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropiedadAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PropiedadAddPage]
})
export class PropiedadAddPageModule {}
