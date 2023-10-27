import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAlumnosPage } from './inicio-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAlumnosPageRoutingModule {}
