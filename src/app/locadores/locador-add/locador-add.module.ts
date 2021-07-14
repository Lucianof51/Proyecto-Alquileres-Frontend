import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocadorAddPageRoutingModule } from './locador-add-routing.module';

import { LocadorAddPage } from './locador-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocadorAddPageRoutingModule
  ],
  declarations: [LocadorAddPage]
})
export class LocadorAddPageModule {}
