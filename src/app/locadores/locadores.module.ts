import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocadoresPageRoutingModule } from './locadores-routing.module';

import { LocadoresPage } from './locadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocadoresPageRoutingModule
  ],
  declarations: [LocadoresPage]
})
export class LocadoresPageModule {}
