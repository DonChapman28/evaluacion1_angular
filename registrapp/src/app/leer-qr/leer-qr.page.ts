import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from '../servicio-datos.service';
import { ApiDatosService } from '../apiDatos/api-datos.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements OnInit {

  

  prueba : any;
  seccion : any; 
  id : any;
  horarios : any;

  constructor(private servicioDatos: ServicioDatosService,
    private api:ApiDatosService,
    private activated: ActivatedRoute) { }

    getId() {
      return this.servicioDatos.alumnoId;
    }

  ngOnInit() {
    this.activated.paramMap.subscribe(p => {
      this.seccion = p.get('qrId') ?? '';
      this.id = this.servicioDatos.alumnoId;
      //con esta wea hacemos que horario tenga los datos que pedimos desde la api anasheeeeeeeiiiiii
      this.api.getHorarioConSeccion(this.seccion, this.id).subscribe((horarioData: any) => {
        this.horarios = horarioData;
        this.prueba = {seccion : this.seccion,
          AlumnoId : this.servicioDatos.alumnoId,
          nombreAlumno : this.servicioDatos.nombreUsuario,
          fecha : "11/12/2024"};
          });
        });
      }
  
      escanner(){
        this.api.postAsistencia(this.prueba).subscribe(response => {
          console.log(response);
          // Manejar la respuesta aquí si es necesario
          
        });
      }
  
}
