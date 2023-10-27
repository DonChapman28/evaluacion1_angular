import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiDatosService {
  private urlBaseAPI = 'http://localhost:3000';
  listadoProfesor : any = [];
  listadoAlumnos : any = [];
  listadoAsignaturas : any = [];
  listadoHorarios : any = [];

  constructor(private http: HttpClient) { }
  getProfesor() {
    const url = this.urlBaseAPI + '/profesores'; // Add a '/' before 'profesores'
    return this.http.get(url);
  }

  getAlumno() {
    const url = this.urlBaseAPI + '/alumnos'; // Add a '/' before 'alumnos'
    return this.http.get(url);
  }

  getAsignaturas() {
    const url = this.urlBaseAPI + '/asignaturas'; // Add a '/' before 'asignaturas'
    return this.http.get(url);
  }

  getHorarios() {
    const url = this.urlBaseAPI + '/horario'; // Add a '/' before 'horario'
    return this.http.get(url);
  }  
}
