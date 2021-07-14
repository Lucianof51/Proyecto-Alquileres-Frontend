import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoAddPageRoutingModule } from './aviso-add-routing.module';

import { AvisoAddPage } from './aviso-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoAddPageRoutingModule
  ],
  declarations: [AvisoAddPage]
})
export class AvisoAddPageModule {}
