import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorAddPageRoutingModule } from './proveedor-add-routing.module';

import { ProveedorAddPage } from './proveedor-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProveedorAddPage]
})
export class ProveedorAddPageModule {}
