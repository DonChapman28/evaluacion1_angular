import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiDatosService {
  private urlBaseAPI = 'https://apiexamenprogra.onrender.com';
  


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

  getHorarioConSeccion(seccion: string,id: string){
    const url = this.urlBaseAPI + '/horario?seccion=' + seccion + '&alumnoId=' + id; 
    return this.http.get(url);
  }
  
  postAsistencia(data : any) {
    const url = this.urlBaseAPI + '/asistencia'; 
    return this.http.post<any>(url, data);
  }  

  getAsistenciaAlumno(id:string,seccion:string){
    const url = this.urlBaseAPI + '/asistencia?AlumnoId=' + id + '&seccion=' + seccion;
    return this.http.get(url);
  }
  
  getAsistenciaSeccion(seccion:string){
    const url = this.urlBaseAPI + '/asistencia?seccion=' + seccion;
    return this.http.get(url);
  }  
}
