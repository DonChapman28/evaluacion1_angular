import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAlumnosPageRoutingModule } from './inicio-alumnos-routing.module';

import { InicioAlumnosPage } from './inicio-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAlumnosPageRoutingModule
  ],
  declarations: [InicioAlumnosPage]
})
export class InicioAlumnosPageModule {}
