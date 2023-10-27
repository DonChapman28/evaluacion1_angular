import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioDatosService } from '../servicio-datos.service';
import { ApiDatosService } from '../apiDatos/api-datos.service';


@Component({
  selector: 'app-inicio-alumnos',
  templateUrl: './inicio-alumnos.page.html',
  styleUrls: ['./inicio-alumnos.page.scss'],
})
export class InicioAlumnosPage implements OnInit {
  alumnos : any = [];
  constructor( private alertContorller:AlertController,
  private router: Router,
  private servicioDatos: ServicioDatosService,
  private api:ApiDatosService) { }

  getUsuario() {
    return this.servicioDatos.nombreUsuario;
  }

  ngOnInit() {
    this.api.getAlumno().subscribe(data => {
      this.alumnos = data; // Asigna los datos a la propiedad profesores después de la respuesta
      console.log(this.alumnos);
    });
  }

  async cerrarSesion()
{
  const alert = await this.alertContorller.create({
      
    header : '',
    subHeader : '',
    message : "Adios",
    buttons : ['x'],

  });
  await alert.present();
  this.router.navigate(['sesion']);

}

}
