import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaranteAddPageRoutingModule } from './garante-add-routing.module';

import { GaranteAddPage } from './garante-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaranteAddPageRoutingModule
  ],
  declarations: [GaranteAddPage]
})
export class GaranteAddPageModule {}
