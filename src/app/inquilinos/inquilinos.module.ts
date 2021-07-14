import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InquilinosPageRoutingModule } from './inquilinos-routing.module';

import { InquilinosPage } from './inquilinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InquilinosPageRoutingModule
  ],
  declarations: [InquilinosPage]
})
export class InquilinosPageModule {}
