import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocadorAddPageRoutingModule } from './locador-add-routing.module';

import { LocadorAddPage } from './locador-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocadorAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LocadorAddPage]
})
export class LocadorAddPageModule {}
