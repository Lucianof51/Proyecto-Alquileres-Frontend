import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarantesPageRoutingModule } from './garantes-routing.module';

import { GarantesPage } from './garantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarantesPageRoutingModule
  ],
  declarations: [GarantesPage]
})
export class GarantesPageModule {}
