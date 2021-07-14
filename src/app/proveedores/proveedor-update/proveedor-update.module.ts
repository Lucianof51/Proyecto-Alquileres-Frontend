import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorUpdatePageRoutingModule } from './proveedor-update-routing.module';

import { ProveedorUpdatePage } from './proveedor-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorUpdatePageRoutingModule
  ],
  declarations: [ProveedorUpdatePage]
})
export class ProveedorUpdatePageModule {}
