import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlegadoPageRoutingModule } from './olegado-routing.module';

import { OlegadoPage } from './olegado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlegadoPageRoutingModule
  ],
  declarations: [OlegadoPage]
})
export class OlegadoPageModule {}
