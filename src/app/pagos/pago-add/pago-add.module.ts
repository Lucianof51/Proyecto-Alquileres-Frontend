import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoAddPageRoutingModule } from './pago-add-routing.module';

import { PagoAddPage } from './pago-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PagoAddPage]
})
export class PagoAddPageModule {}
