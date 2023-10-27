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
  getProfesores() {
    const url = this.urlBaseAPI + '/profesores'; 
    return this.http.get(url);
  }

  getAlumnos() {
    const url = this.urlBaseAPI + '/alumnos'; 
    return this.http.get(url);
  }
  

  getAsignaturas() {
    const url = this.urlBaseAPI + '/asignaturas'; 
    return this.http.get(url);
  }

  getHorarioAlumno(id: string) {
    const url = this.urlBaseAPI + '/horario?alumnoId=' + id; 
    return this.http.get(url);
  }  
  
  getHorarioProfe(id: string) {
    const url = this.urlBaseAPI + '/horario?profeId=' + id; 
    return this.http.get(url);
  }  
}
