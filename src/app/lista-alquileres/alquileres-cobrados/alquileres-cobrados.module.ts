import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquileresCobradosPageRoutingModule } from './alquileres-cobrados-routing.module';

import { AlquileresCobradosPage } from './alquileres-cobrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquileresCobradosPageRoutingModule
  ],
  declarations: [AlquileresCobradosPage]
})
export class AlquileresCobradosPageModule {}
