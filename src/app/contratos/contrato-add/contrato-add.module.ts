import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratoAddPageRoutingModule } from './contrato-add-routing.module';

import { ContratoAddPage } from './contrato-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContratoAddPage]
})
export class ContratoAddPageModule {}
