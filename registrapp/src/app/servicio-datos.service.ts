import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {
  public nombreUsuario: string = '';
  public asignatura: string = '';
  public codigoQr: string = '';

  constructor() { }
}
