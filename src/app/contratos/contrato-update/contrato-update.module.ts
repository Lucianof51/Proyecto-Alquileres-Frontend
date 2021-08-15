import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratoUpdatePageRoutingModule } from './contrato-update-routing.module';

import { ContratoUpdatePage } from './contrato-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ContratoUpdatePage]
})
export class ContratoUpdatePageModule {}
