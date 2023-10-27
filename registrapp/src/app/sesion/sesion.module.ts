import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionPageRoutingModule } from './sesion-routing.module';

import { SesionPage } from './sesion.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SesionPageRoutingModule
  ],
  declarations: [SesionPage]
})
export class SesionPageModule {}
