import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarQrPageRoutingModule } from './generar-qr-routing.module';

import { GenerarQrPage } from './generar-qr.page';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarQrPageRoutingModule
  ],
  declarations: [GenerarQrPage]
})
export class GenerarQrPageModule {}
