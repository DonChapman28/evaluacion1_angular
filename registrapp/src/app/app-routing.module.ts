import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio/:id',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'inicio-alumnos/:id',
    loadChildren: () => import('./inicio-alumnos/inicio-alumnos.module').then( m => m.InicioAlumnosPageModule)
  },
  {
    path: 'generar-qr/:qrId',
    loadChildren: () => import('./generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'leer-qr/:qrId/:asignatura',
    loadChildren: () => import('./leer-qr/leer-qr.module').then( m => m.LeerQrPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
