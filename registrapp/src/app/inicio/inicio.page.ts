import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicioDatosService } from '../servicio-datos.service';
import { ApiDatosService } from '../apiDatos/api-datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  horarios :any = [];
  id : string = '';
  alumnos : any = [];
  profesores : any = [];
  texto: any;
  constructor( private alertContorller:AlertController,
    private router: Router,
    private servicioDatos: ServicioDatosService,
    private api:ApiDatosService,
    private activated: ActivatedRoute,
  ) { }

    getUsuario() {
      return this.servicioDatos.nombreUsuario;
    }

  ngOnInit() {
    this.activated.paramMap.subscribe(p => {
      this.id = p.get('id') ?? '';
      //con esta wea hacemos que horario tenga los datos que pedimos desde la api anasheeeeeeeiiiiii
      this.api.getHorarioProfe(this.id).subscribe((horarioData: any) => {
        this.horarios = horarioData;
        console.log('hola_xD');
        console.log('Datos de horario:', this.horarios);
      });
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

async generarQr(){
  this.router.navigate(['generar-qr']);
 

}


}