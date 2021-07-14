import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoUpdatePageRoutingModule } from './aviso-update-routing.module';

import { AvisoUpdatePage } from './aviso-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoUpdatePageRoutingModule
  ],
  declarations: [AvisoUpdatePage]
})
export class AvisoUpdatePageModule {}
