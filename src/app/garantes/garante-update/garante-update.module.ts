import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaranteUpdatePageRoutingModule } from './garante-update-routing.module';

import { GaranteUpdatePage } from './garante-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaranteUpdatePageRoutingModule
  ],
  declarations: [GaranteUpdatePage]
})
export class GaranteUpdatePageModule {}
