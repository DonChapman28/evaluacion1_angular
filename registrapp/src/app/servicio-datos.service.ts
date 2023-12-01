import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {
  public nombreUsuario: string = '';
  public asignatura: string = '';
  public seccion: string = '';
  public alumnoId: string = '';
  public codigoQr: string = '';
  public asistenciaAlumno : any;
  public asistenciaSeccion : any;

  constructor() { }
}
