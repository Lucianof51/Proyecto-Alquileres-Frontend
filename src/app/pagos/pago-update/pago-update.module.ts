import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoUpdatePageRoutingModule } from './pago-update-routing.module';

import { PagoUpdatePage } from './pago-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoUpdatePageRoutingModule
  ],
  declarations: [PagoUpdatePage]
})
export class PagoUpdatePageModule {}
