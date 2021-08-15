import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocadorUpdatePageRoutingModule } from './locador-update-routing.module';

import { LocadorUpdatePage } from './locador-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocadorUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LocadorUpdatePage]
})
export class LocadorUpdatePageModule {}
